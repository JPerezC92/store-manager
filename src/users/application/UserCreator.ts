import { DomainError } from '@/shared/domain/error/ErrorCodes';
import type { UserNewProps } from '@/users/domain/model/User';
import { User } from '@/users/domain/model/User';
import type { UserRepository } from '@/users/domain/model/UserRepository';
import { UserFinder } from '@/users/domain/services/UserFinder';

export class UserCreator<Output> {
	private readonly userFinder: UserFinder;
	constructor(
		private readonly userRepository: UserRepository,
		private readonly resultAdapter: (user: User) => Output,
	) {
		this.userFinder = new UserFinder(userRepository);
	}

	async execute(user: UserNewProps) {
		const foundUserOrError = await this.userFinder.execute(user.email);

		if (DomainError.isInstanceOf(foundUserOrError)) return foundUserOrError;

		const newUser = User.createNew(user);

		await this.userRepository.save(newUser);

		return this.resultAdapter(newUser);
	}
}
