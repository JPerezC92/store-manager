import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { config } from '@/shared/infrastructure/utils/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/infrastructure/database.module';
import { SharedModule } from './shared/infrastructure/shared.module';
import { UsersModule } from './users/infrastructure/users.module';

@Module({
	imports: [
		ConfigModule.forRoot({
			load: [() => config],
		}),
		SharedModule,
		DatabaseModule,
		UsersModule,
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
