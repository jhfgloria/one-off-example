import { NestFactory } from '@nestjs/core';
import { OneOffModule } from './one-off.module';

async function oneOff() {
  const application = await NestFactory.createApplicationContext(OneOffModule);
  await application.close();
}

oneOff().catch(console.error);
