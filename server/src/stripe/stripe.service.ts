import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { SubscriptionEntity } from './entities/stripe.entity';

@Injectable()
export class StripeService {
  /*   constructor(private readonly stripe: Stripe) {}

  async createCustomer(email: string): Promise<Customer> {
    return await this.stripe.customers.create({ email });
  }

  async createSubscription(
    customerId: string,
    planId: string
  ): Promise<SubscriptionEntity> {
    const subscription = await this.stripe.subscriptions.create({
      customer: customerId,
      plan: planId
    });

    // ...
  } */
}
