import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import * as config from 'config';

async function bootstrap() {
  const serverConfig = config.get('server');
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('boostrap');
  app.useGlobalPipes(new ValidationPipe());
  const port = process.env.PORT || serverConfig.port;
  await app.listen(port);
  logger.log(`Application is listening on ${port}`);
}
bootstrap();
