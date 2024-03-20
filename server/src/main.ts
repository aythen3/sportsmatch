import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { CORS } from './config/cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(morgan('dev'));

  app.enableCors(CORS);

  app.useGlobalPipes(
    new ValidationPipe({
      transformOptions: {
        enableImplicitConversion: true
      }
    })
  );

  app.setGlobalPrefix('api');

  const configService = app.get(ConfigService);

  await app.listen(+configService.get('PORT') || 3000);
  console.log(`Api running on: localhost:${configService.get('PORT') || 3000}`);
}

bootstrap();
