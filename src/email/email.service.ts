import { Injectable } from '@nestjs/common';

@Injectable({})
export class EmailService {
  async send(email: string) {
    console.log(`Sending email to ${email}`);
  }
}
