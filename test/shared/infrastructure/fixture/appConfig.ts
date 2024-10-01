import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';

import { versioningConfig } from '@/shared/infrastructure/utils/versioningConfig';

type ConfigFn = (app: INestApplication<any>) => INestApplication<any>;

export function appConfig(
	testingModule: TestingModule,
	config: ConfigFn[],
): INestApplication<any> {
	let app = testingModule.createNestApplication();

	app = config.reduce((acc, fn) => fn(acc), app);

	return app;
}

export const version1Config: ConfigFn[] = [
	(app) => app.enableVersioning(versioningConfig),
];
