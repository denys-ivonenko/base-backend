import { Module } from '@nestjs/common';
import { ConfigModule as NestConfigModule } from '@nestjs/config';
import { validate } from './validate'; 
import { ConfigService } from './config.service';

@Module({
  providers: [ConfigService],
  imports: [NestConfigModule.forRoot({
    validate,
  })],
  exports: [ConfigService],
})
export class ConfigModule {}
