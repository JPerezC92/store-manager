import type { Properties } from '@/shared/domain/types/properties';
import { UserID } from '@/users/domain/valueObject/UserID';

export type UserNewProps = Omit<User, 'userId'>;

export type UserProps = Properties<User>;

export class User {
	userId: UserID;
	firstNameOne: string;
	firstNameTwo: string;
	lastNameOne: string;
	lastNameTwo: string;
	email: string;
	password: string;

	constructor(p: UserProps) {
		this.userId = p.userId;
		this.firstNameOne = p.firstNameOne;
		this.firstNameTwo = p.firstNameTwo;
		this.lastNameOne = p.lastNameOne;
		this.lastNameTwo = p.lastNameTwo;
		this.email = p.email;
		this.password = p.password;
	}

	static createNew(userNew: UserNewProps): User {
		return new User({
			userId: UserID.generate(),
			firstNameOne: userNew.firstNameOne,
			firstNameTwo: userNew.firstNameTwo,
			lastNameOne: userNew.lastNameOne,
			lastNameTwo: userNew.lastNameTwo,
			email: userNew.email,
			password: userNew.password,
		});
	}
}
