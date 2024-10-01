import { Module } from '@nestjs/common';

import { ExceptionMapper } from './services/exceptionMapper.service';

@Module({
	providers: [ExceptionMapper],
	exports: [ExceptionMapper],
})
export class SharedModule {}
