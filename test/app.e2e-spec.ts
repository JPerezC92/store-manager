import type { INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { StatusCodes } from 'http-status-codes';
import { AppModule } from 'src/app.module';
import request from 'supertest';
import {
	appConfig,
	version1Config,
} from 'test/shared/infrastructure/fixture/appConfig';

import { apiVersion1 } from '@/shared/infrastructure/utils/versioningConfig';

describe('AppController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = appConfig(moduleFixture, version1Config);

		await app.init();
	});

	it('/ (GET)', () => {
		request(app.getHttpServer())
			.get(apiVersion1())
			.expect(StatusCodes.OK)
			.expect('Hello World!');
	});
});
