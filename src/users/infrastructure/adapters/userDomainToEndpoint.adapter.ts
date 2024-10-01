import type { User } from '@/users/domain/model/User';
import {
	type UserEndpoint,
	userEndpoint,
} from '@/users/infrastructure/schemas/userEndpoint.schema';

export function userDomainToEndpoint(user: User): UserEndpoint {
	return userEndpoint.parse({
		userId: user.userId.value(),
		firstNameOne: user.firstNameOne,
		firstNameTwo: user.firstNameTwo,
		lastNameOne: user.lastNameOne,
		lastNameTwo: user.lastNameTwo,
		email: user.email,
	});
}
