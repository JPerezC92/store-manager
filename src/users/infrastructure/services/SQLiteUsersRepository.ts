import type { Prisma } from '@prisma/client';

import type { User } from '@/users/domain/model/User';
import type { UserRepository } from '@/users/domain/model/UserRepository';
import type { UserID } from '@/users/domain/valueObject/UserID';
import { userDbToDomain } from '@/users/infrastructure/adapters/userDbToDomain.adapter';

export class SQLiteUsersRepository implements UserRepository {
	private readonly db: Prisma.TransactionClient;

	constructor(db: Prisma.TransactionClient) {
		this.db = db;
	}

	async findByEmail(userEmail: string): Promise<User | null> {
		const res = await this.db.user.findUnique({
			where: {
				email: userEmail,
			},
		});

		if (!res) return null;

		return userDbToDomain(res);
	}

	async findById(userId: UserID): Promise<User | null> {
		const res = await this.db.user.findUnique({
			where: {
				userId: userId.value(),
			},
		});

		if (!res) return null;

		return userDbToDomain(res);
	}

	async save(user: User): Promise<void> {
		await this.db.user.create({
			data: {
				userId: user.userId.value(),
				firstNameOne: user.firstNameOne,
				firstNameTwo: user.firstNameTwo,
				lastNameOne: user.lastNameOne,
				lastNameTwo: user.lastNameTwo,
				email: user.email,
				password: user.password,
			},
		});
	}
}
