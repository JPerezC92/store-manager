import type { VersioningOptions } from '@nestjs/common';
import { VersioningType } from '@nestjs/common';

import { config } from './config';

export const versioningConfig: VersioningOptions = {
	type: VersioningType.URI,
	prefix: config.API_PREFIX,
	defaultVersion: config.API_VERSION,
};

export function apiVersion1(path = ''): string {
	return `/${config.API_PREFIX}${config.API_VERSION}${path}`;
}
