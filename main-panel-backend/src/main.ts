import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module.js';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get(ConfigService);
  const allowed = (config.get<string>('CORS_ORIGINS') ?? '')
    .split(',')
    .map((o) => o.trim().replace(/\/+$/, ''))
    .filter(Boolean);
  app.enableCors({
  origin: (origin: string, cb: (arg0: null, arg1: boolean) => void) => {
      if (!origin || allowed.includes(origin)) return cb(null, true);
      console.warn('CORS rejected:', JSON.stringify(origin));
      cb(null, false);
    },
  methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 86400,   
});
  await app.listen(process.env.PORT ?? 4000);
}
await bootstrap();
