import { faker } from '@faker-js/faker';

import type { UserProps } from '@/users/domain/model/User';
import { User } from '@/users/domain/model/User';
import { UserID } from '@/users/domain/valueObject/UserID';

export class UserMoher {
	static async create(user: Partial<UserProps>): Promise<User> {
		return await new User({
			userId: UserID.generate(),
			firstNameTwo: faker.person.firstName(),
			lastNameOne: faker.person.lastName(),
			firstNameOne: faker.person.firstName(),
			lastNameTwo: faker.person.lastName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
			...user,
		});
	}
}
