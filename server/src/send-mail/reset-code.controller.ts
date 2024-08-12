import { Body, Controller, Post } from '@nestjs/common';
import { ResetCodeService } from './reset-code.service';

@Controller('reset-code')
export class ResetCodeController {
  constructor(private readonly resetCodeService: ResetCodeService) {}

  @Post('reset-password')
  async sendResetPasswordMail(@Body() body: { email: string }) {
    return this.resetCodeService.sendResetCodeEmail(body.email);
  }

  @Post('validate-reset-code')
  async validateResetCode(
    @Body()
    body: {
      code: string;
      email: string;
      password: string;
    }
  ) {
    return this.resetCodeService.validateResetCode(
      body.code,
      body.email,
      body.password
    );
  }
}
