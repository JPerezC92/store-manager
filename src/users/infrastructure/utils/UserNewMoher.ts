import { faker } from '@faker-js/faker';

import type { UserNewProps } from '@/users/domain/model/User';
import { User } from '@/users/domain/model/User';

export class UserNewMoher {
	static async create(user?: Partial<UserNewProps>): Promise<UserNewProps> {
		return await User.createNew({
			email: faker.internet.email(),
			firstNameOne: faker.person.firstName(),
			firstNameTwo: faker.person.firstName(),
			lastNameOne: faker.person.lastName(),
			lastNameTwo: faker.person.lastName(),
			password: faker.internet.password(),
			...user,
		});
	}
}
