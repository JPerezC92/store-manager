import { mock } from 'vitest-mock-extended';

import { rawAdapter } from '@/shared/application/adapter/raw.adapter';
import { UserCreator } from '@/users/application/UserCreator';
import { UserEmailAlreadyExistsError } from '@/users/domain/error/UserEmailAlreadyExistsError';
import { User } from '@/users/domain/model/User';
import type { UserRepository } from '@/users/domain/model/UserRepository';
import { UserMoher } from '@/users/infrastructure/utils/UserMoher';
import { UserNewMoher } from '@/users/infrastructure/utils/UserNewMoher';

const UsersMockRepository = mock<UserRepository>();

describe('UserCreator (Unit)', () => {
	it('should create a user', async () => {
		// Given
		const userNew = await UserNewMoher.create();
		const userCreator = new UserCreator(UsersMockRepository, rawAdapter);

		// When
		const user = await userCreator.execute(userNew);

		// Then
		expect(user).toBeDefined();
		expect(user).toBeInstanceOf(User);
	});

	it('should throw an error if the user already exists', async () => {
		const userNew = await UserNewMoher.create();
		const user = await UserMoher.create(userNew);

		// Given
		const userCreator = new UserCreator(UsersMockRepository, rawAdapter);
		UsersMockRepository.findByEmail.mockResolvedValue(user);

		// When
		const error = await userCreator.execute(userNew);

		// Then
		expect(error).toBeInstanceOf(UserEmailAlreadyExistsError);
	});
});
