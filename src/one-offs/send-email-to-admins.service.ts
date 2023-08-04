import { Injectable } from '@nestjs/common';
import { EmailService } from 'src/email/email.service';

@Injectable({})
export class SendEmailToAdmins {
  constructor(private readonly emailService: EmailService) {}

  async run() {
    this.emailService.send('admin@mail.co');
  }
}
