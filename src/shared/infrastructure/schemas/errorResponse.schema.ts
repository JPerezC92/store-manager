import { createZodDto } from '@anatine/zod-nestjs';
import { extendApi } from '@anatine/zod-openapi';
import { z } from 'zod';

const errorResponseExample = {
	statusCode: 'number',
	message: 'string',
	error: 'string',
	path: 'string',
	method: 'HTTP method',
	createdAt: 'string',
};

export const errorResponseSchema = extendApi(
	z.object({
		statusCode: z.number().describe('number'),
		message: z.string(),
		error: z.string(),
		path: z.string(),
		method: z.string(),
		createdAt: z.string(),
	}),
	{
		title: 'ErrorResponse',
		description: 'Error response',
		example: errorResponseExample,
	},
);

export type ErrorResponseSchema = typeof errorResponseSchema;
export class ErrorResponse extends createZodDto(errorResponseSchema) {}

type AnatineSchemaObject = Parameters<typeof extendApi>[1] & {
	example?: Partial<ErrorResponse>;
};

export function createErrorResponseSchema(schemaObject?: AnatineSchemaObject) {
	if (schemaObject && schemaObject?.example) {
		schemaObject.example = {
			...errorResponseExample,
			...schemaObject?.example,
		};
	}
	return extendApi(errorResponseSchema, schemaObject);
}
