import { DomainError, ErrorCodesEnum } from '@/shared/domain/error/ErrorCodes';

export class UserEmailAlreadyExistsError extends DomainError {
	readonly code = ErrorCodesEnum.USER_EMAIL_ALREADY_EXISTS;
	readonly message: string;

	constructor(email?: string) {
		super();
		this.message = email
			? `User email already exists: ${email}`
			: 'User email already exists';
	}

	isInstanceOf(error: unknown): error is UserEmailAlreadyExistsError {
		return error instanceof UserEmailAlreadyExistsError;
	}
}
