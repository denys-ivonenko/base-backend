import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from './config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const port = configService.get<number>('HTTP_PORT');
  await app.listen(port, () => {
    console.log(`Start listening on port ${port}`)
  });
}
bootstrap();
