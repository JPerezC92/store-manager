import { ConflictException, Injectable } from '@nestjs/common';

import { PrismaService } from '@/database/infrastructure/services/database.service';
import { DomainError, ErrorCodesEnum } from '@/shared/domain/error/ErrorCodes';
import { ExceptionMapper } from '@/shared/infrastructure/services/exceptionMapper.service';
import { UserCreator } from '@/users/application/UserCreator';
import type { UserNewProps } from '@/users/domain/model/User';
import { userDomainToEndpoint } from '@/users/infrastructure/adapters/userDomainToEndpoint.adapter';

import { SQLiteUsersRepository } from './SQLiteUsersRepository';

@Injectable()
export class UsersService {
	constructor(
		private readonly prismaService: PrismaService,
		private readonly exceptionMapperService: ExceptionMapper,
	) {}

	async createUser(userNew: UserNewProps) {
		const result = await this.prismaService.$transaction(
			async (tx) =>
				await new UserCreator(
					new SQLiteUsersRepository(tx),
					userDomainToEndpoint,
				).execute(userNew),
		);

		if (!DomainError.isInstanceOf(result)) return result;

		const httpError = this.exceptionMapperService.mapDomainErrorToHttpException(
			result,
			{
				[ErrorCodesEnum.USER_EMAIL_ALREADY_EXISTS]: ConflictException,
			},
		);

		throw httpError();
	}
}
