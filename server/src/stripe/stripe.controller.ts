import { Controller, Post, Body } from '@nestjs/common';
import { StripeService } from './stripe.service';
import { PaymentDto } from './dto/PaymentDto.dto';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post('/charge')
  async chargeCard(@Body() paymentData: PaymentDto) {
    return await this.stripeService.createCharge(
      paymentData.amount,
      paymentData.currency,
      paymentData.source
    );
  }
}
