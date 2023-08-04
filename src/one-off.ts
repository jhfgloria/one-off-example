import { NestFactory } from '@nestjs/core';
import { OneOffModule } from './one-off.module';
import * as Executables from './one-offs';

async function oneOff() {
  const klass = process.argv[2];
  const application = await NestFactory.createApplicationContext(OneOffModule);
  const oneOff = application.get(Executables[klass]);

  try {
    await oneOff.run();
  } catch (error) {
    console.error(error);
  }

  await application.close();
}

oneOff().catch(console.error);
