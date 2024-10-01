import { createClient } from '@libsql/client';
import type { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { PrismaLibSQL } from '@prisma/adapter-libsql';
import { PrismaClient } from '@prisma/client';

import { isProduction } from '@/shared/infrastructure/utils/nodeEnv';

function getPrismaClient() {
	if (isProduction()) {
		return class extends PrismaClient implements OnModuleInit {
			constructor() {
				super({
					adapter: new PrismaLibSQL(
						createClient({
							url: `${process.env.TURSO_DATABASE_URL}`,
							authToken: `${process.env.TURSO_AUTH_TOKEN}`,
						}),
					),
				});
			}

			async onModuleInit() {
				await this.$connect();
			}
		};
	}

	return class extends PrismaClient implements OnModuleInit {
		async onModuleInit() {
			await this.$connect();
		}
	};
}

@Injectable()
export class PrismaService extends getPrismaClient() implements OnModuleInit {}
