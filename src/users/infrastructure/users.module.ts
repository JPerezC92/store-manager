import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { DatabaseModule } from '@/database/infrastructure/database.module';
import { SharedModule } from '@/shared/infrastructure/shared.module';

import { UsersService } from './services/users.service';
import { UsersController } from './users.controller';

@Module({
	controllers: [UsersController],
	providers: [UsersService],
	imports: [ConfigModule, SharedModule, DatabaseModule],
})
export class UsersModule {}
