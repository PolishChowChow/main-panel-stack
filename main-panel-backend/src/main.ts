import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
  origin: ['http://localhost:5173', 'http://localhost:4173', 'http://web:4173', 'http://vps-enchanted-forrest.com', 'https://vps-enchanted-forrest.com'], // your frontend origin(s)
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400,   
});
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
