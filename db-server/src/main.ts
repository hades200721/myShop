import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import process from "process";

const port = process.env.PORT || 3001;
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(port);
}

bootstrap();
