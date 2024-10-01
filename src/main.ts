import { patchNestjsSwagger } from '@anatine/zod-nestjs';
import { NestFactory } from '@nestjs/core';
import * as swagger from '@nestjs/swagger';

import { versioningConfig } from '@/shared/infrastructure/utils/versioningConfig';

import { AppModule } from './app.module';

export async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	app.enableVersioning(versioningConfig);

	const config = new swagger.DocumentBuilder()
		.setTitle('Store Manager API')
		.setDescription('This is the API for the Store Manager application')
		.setVersion('1.0')
		.addBearerAuth()
		.build();

	patchNestjsSwagger();

	const document = swagger.SwaggerModule.createDocument(app, config);
	swagger.SwaggerModule.setup('/docs', app, document);

	await app.listen(8000);
}

bootstrap();
