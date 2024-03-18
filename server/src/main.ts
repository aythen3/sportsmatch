import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as morgan from 'morgan';
import { ValidationPipe } from '@nestjs/common';
import { CORS } from './config/cors';
import { WsAdapter } from '@nestjs/platform-ws'; // Importa el adaptador de WebSocket

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

  app.useWebSocketAdapter(new WsAdapter(app)); // Usa el adaptador de WebSocket

  await app.listen(+configService.get('PORT') || 3000);
  console.log(`Api running on: localhost:${configService.get('PORT') || 3000}`);
}

bootstrap();
