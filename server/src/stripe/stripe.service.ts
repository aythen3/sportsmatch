import { Injectable } from '@nestjs/common';
import Stripe from 'stripe';
import { Cart } from './Cart.model';

@Injectable()
export class StripeService {
  private stripe;

  constructor() {
    this.stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
      apiVersion: null
    });
  }

  public checkout(cart: Cart) {
    const totalPrice = cart.reduce(
      (acc, item) => acc + item.quantity * item.price,
      0
    );
    return this.stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: 'usd',
      payment_method_types: ['card']
    });
  }

  public async createSubscription(req, res) {
    const customer = await this.stripe.customers.create();
    const ephemeralKey = await this.stripe.ephemeralKeys.create(
      { customer: customer.id },
      { apiVersion: '2023-10-16' }
    );
    const paymentIntent = await this.stripe.paymentIntents.create({
      amount: 1099,
      currency: 'usd',
      customer: customer.id,
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter
      // is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true
      }
    });

    res.json({
      paymentIntent: paymentIntent.client_secret,
      ephemeralKey: ephemeralKey.secret,
      customer: customer.id,
      publishableKey: process.env.STRIPE_PUBLIC_KEY
    });
  }

  async createExpressAccount(): Promise<any> {
    try {
      const account = await this.stripe.accounts.create({
        type: 'express'
      });
      return account;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
  async createAccountLink(acc: string): Promise<any> {
    try {
      const accountLink = await this.stripe.accountLinks.create({
        account: acc,
        refresh_url: 'https://example.com/reauth',
        return_url: 'https://example.com/return',
        type: 'account_onboarding'
      });
      return accountLink;
    } catch (error) {
      // Handle error
      throw error;
    }
  }
}
