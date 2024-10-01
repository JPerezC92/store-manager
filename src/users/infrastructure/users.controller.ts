import { ZodValidationPipe } from '@anatine/zod-nestjs';
import { Body, Controller, Post, UsePipes } from '@nestjs/common';
import {
	ApiConflictResponse,
	ApiCreatedResponse,
	ApiTags,
} from '@nestjs/swagger';

import { ConflictResponse } from '@/shared/infrastructure/errors/ConflictResponse';
import { UserEndpoint } from '@/users/infrastructure/schemas/userEndpoint.schema';

import { UserCreateDto } from './schemas/userCreate.schema';
import { UsersService } from './services/users.service';

@Controller('users')
@ApiTags('users')
@UsePipes(ZodValidationPipe)
export class UsersController {
	constructor(private readonly usersService: UsersService) {}

	@Post()
	@ApiCreatedResponse({
		type: UserEndpoint,
	})
	@ApiConflictResponse({ type: ConflictResponse })
	async createUser(@Body() userNew: UserCreateDto) {
		return await this.usersService.createUser(userNew);
	}
}
