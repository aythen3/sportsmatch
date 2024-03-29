import { Body, Controller, Post, Req, Res } from '@nestjs/common';
import { Cart } from './Cart.model';
import { StripeService } from './stripe.service';

@Controller('stripe')
export class StripeController {
  constructor(private readonly stripeService: StripeService) {}

  @Post()
  checkout(@Body() body: { cart: Cart }) {
    try {
      return this.stripeService.checkout(body.cart);
    } catch (error) {
      return error;
    }
  }

  @Post('/subscription')
  createSubscription(@Req() req, @Res() res) {
    try {
      return this.stripeService.createSubscription(req, res);
    } catch (error) {
      return error;
    }
  }

  @Post('create-express-account')
  async createExpressAccount(): Promise<any> {
    return this.stripeService.createExpressAccount();
  }
  @Post('create-account-link')
  async createAccountLink(@Body() body: { acc: string }): Promise<any> {
    // Replace 'CONNECTED_ACCOUNT_ID' with the actual connected account ID
    return this.stripeService.createAccountLink(body.acc);
  }
}
