import type { UserID } from '@/users/domain/valueObject/UserID.js';

import type { User } from './User.js';

export interface UserRepository {
	findById(userId: UserID): Promise<User | null>;
	findByEmail(userEmail: User['email']): Promise<User | null>;
	save(user: User): Promise<void>;
}
