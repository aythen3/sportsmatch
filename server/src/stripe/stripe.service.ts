import { Inject, Injectable } from '@nestjs/common';
import Stripe from 'stripe';

@Injectable()
export class StripeService {
  constructor(
    @Inject('STRIPE_CLIENT')
    private stripe: Stripe
  ) {}

  async createCharge(
    amount: number,
    currency: string,
    source: string
  ): Promise<any> {
    return this.stripe.charges.create({
      amount,
      currency,
      source
    });
  }

  async createSubscription(customerId: string, priceId: string): Promise<any> {
    return this.stripe.subscriptions.create({
      customer: customerId,
      items: [{ price: priceId }]
    });
  }

  async createCustomer(email: string): Promise<any> {
    return this.stripe.customers.create({ email });
  }
}
