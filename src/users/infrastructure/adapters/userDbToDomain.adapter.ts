import type * as Prisma from '@prisma/client';

import { User } from '@/users/domain/model/User';
import { UserID } from '@/users/domain/valueObject/UserID';

export function userDbToDomain(user: Prisma.User): User {
	return new User({
		userId: new UserID(user.userId),
		firstNameOne: user.firstNameOne,
		firstNameTwo: user.firstNameTwo ?? '',
		lastNameOne: user.lastNameOne,
		lastNameTwo: user.lastNameTwo ?? '',
		email: user.email,
		password: user.password,
	});
}
