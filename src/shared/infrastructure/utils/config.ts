export enum ConfigEnum {
	NODE_ENV = 'NODE_ENV',
	PORT = 'PORT',
	API_VERSION = 'API_VERSION',
	API_PREFIX = 'API_PREFIX',
}

export const config = {
	NODE_ENV: process.env.NODE_ENV ?? '',
	PORT: parseInt(process.env.PORT ?? '') ?? 8000,
	API_PREFIX: process.env.API_PREFIX ?? '',
	API_VERSION: process.env.API_VERSION ?? '',
} satisfies Record<ConfigEnum, unknown>;

export type Config = typeof config;
