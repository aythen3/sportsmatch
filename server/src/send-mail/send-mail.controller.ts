import { Controller, Post, Body } from '@nestjs/common';
import { SendMailService } from './send-mail.service';

@Controller('send-mails')
export class SendMailController {
  constructor(private readonly sendMailsService: SendMailService) {}

  @Post('registration-mail')
  async sendRegistrationMail(@Body() body: { email: string }) {
    return this.sendMailsService.sendRegistrationNotification(body.email);
  }
}
