import { createZodDto } from '@anatine/zod-nestjs';
import { StatusCodes } from 'http-status-codes';

import { createErrorResponseSchema } from '../schemas/errorResponse.schema';

export const conflictResponseSchema = createErrorResponseSchema({
	title: 'ConflictResponse',
	description:
		'The request could not be completed due to a conflict with the current state of the target resource.',
	example: { statusCode: StatusCodes.CONFLICT },
});

export class ConflictResponse extends createZodDto(conflictResponseSchema) {}
