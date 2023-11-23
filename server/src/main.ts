/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-var-requires */



import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

import * as morgan from 'morgan';
import { CORS } from './constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(morgan('dev'));

  const configService = app.get(ConfigService)
  const port = configService.get('PORT')

  app.setGlobalPrefix('API');
  app.enableCors(CORS);

  await app.listen(port);
  console.log(`Server running on port ${await app.getUrl()}`);
}
bootstrap();
