import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { SendEmailToAdmins } from './one-offs';
import { EmailModule } from './email/email.module';

@Module({
  imports: [
    EmailModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      username: process.env.DB_USER,
      logging: false,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      synchronize: false,
    }),
  ],
  providers: [SendEmailToAdmins],
  exports: [SendEmailToAdmins],
})
export class OneOffModule {}
