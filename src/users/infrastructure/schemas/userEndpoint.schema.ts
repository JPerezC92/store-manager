import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

export const userEndpoint = extendApi(
	z.object({
		userId: z.string().uuid(),
		firstNameOne: z.string(),
		firstNameTwo: z.string(),
		lastNameOne: z.string(),
		lastNameTwo: z.string(),
		email: z.string().email(),
	}),
);

export class UserEndpoint extends createZodDto(userEndpoint) {}
