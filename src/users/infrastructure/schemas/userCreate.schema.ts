import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const UserCreate = extendApi(
	z.object({
		firstNameOne: z.string(),
		firstNameTwo: z.string(),
		lastNameOne: z.string(),
		lastNameTwo: z.string(),
		email: z.string().email(),
		password: z.string(),
	}),
	{
		title: 'UserCreate',
		description: 'A new user',
	},
);

export class UserCreateDto extends createZodDto(UserCreate) {}
