export enum ErrorCodesEnum {
	USER_EMAIL_ALREADY_EXISTS = 'USER_EMAIL_ALREADY_EXISTS',
}

export abstract class DomainError {
	abstract readonly code: ErrorCodesEnum;
	abstract readonly message: string;
	abstract isInstanceOf(error: unknown): boolean;

	static isInstanceOf(error: unknown): error is DomainError {
		return error instanceof DomainError;
	}
}
