import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // using .env file to import port number and remove hard-coding.
  dotenv.config();
  const PORT = process.env.PORT || 5000
  await app.listen(PORT);
}
bootstrap();
