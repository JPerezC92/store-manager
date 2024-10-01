import { UserEmailAlreadyExistsError } from '@/users/domain/error/UserEmailAlreadyExistsError';
import type { UserRepository } from '@/users/domain/model/UserRepository';

export class UserFinder {
	constructor(private readonly userRepository: UserRepository) {}

	async execute(email: string) {
		const foundUser = await this.userRepository.findByEmail(email);

		if (foundUser) return new UserEmailAlreadyExistsError();

		return foundUser;
	}
}
