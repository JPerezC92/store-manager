import { HttpStatus, type INestApplication } from '@nestjs/common';
import type { TestingModule } from '@nestjs/testing';
import { Test } from '@nestjs/testing';
import { AppModule } from 'src/app.module';
import request from 'supertest';
import {
	appConfig,
	version1Config,
} from 'test/shared/infrastructure/fixture/appConfig';

import { apiVersion1 } from '@/shared/infrastructure/utils/versioningConfig';
import { UserNewMoher } from '@/users/infrastructure/utils/UserNewMoher';

describe('UsersController (e2e)', () => {
	let app: INestApplication;

	beforeEach(async () => {
		const moduleFixture: TestingModule = await Test.createTestingModule({
			imports: [AppModule],
		}).compile();

		app = appConfig(moduleFixture, version1Config);

		await app.init();
	});

	it('/users (POST)', async () => {
		// Given
		const userNew = await UserNewMoher.create();

		// When
		const result = await request(app.getHttpServer())
			.post(apiVersion1('/users'))
			.send(userNew);

		// Then
		expect(result.status).toBe(HttpStatus.CREATED);
		expect(result.body).toBeDefined();
		expect(result.body).toEqual({
			userId: expect.any(String),
			firstNameOne: userNew.firstNameOne,
			firstNameTwo: userNew.firstNameTwo,
			lastNameOne: userNew.lastNameOne,
			lastNameTwo: userNew.lastNameTwo,
			email: userNew.email,
		});
	});
});
