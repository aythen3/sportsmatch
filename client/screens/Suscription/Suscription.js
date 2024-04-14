import React from 'react';
import {useStripe, PaymentSheetError} from '@stripe/stripe-react-native';
import {View, Button} from 'react-native';

function SubscribeView({clientSecret}) {
  const {initPaymentSheet, presentPaymentSheet} = useStripe();

  React.useEffect(() => {
    const initializePaymentSheet = async () => {
      const {error} = await initPaymentSheet({
        paymentIntentClientSecret: clientSecret,
        returnURL: 'stripe-example://payment-sheet',
        // Set `allowsDelayedPaymentMethods` to true if your business handles
        // delayed notification payment methods like US bank accounts.
        allowsDelayedPaymentMethods: true,
      });
      if (error) {
        // Handle error
      }
    };

    initializePaymentSheet();
  }, [clientSecret, initPaymentSheet]);

  return (
    <View>
      <Button
        title="Subscribe"
        onPress={async () => {
          const {error} = await presentPaymentSheet();
          if (error) {
            if (error.code === PaymentSheetError.Failed) {
              // Handle failed
            } else if (error.code === PaymentSheetError.Canceled) {
              // Handle canceled
            }
          } else {
            // Payment succeeded
          }
        }}
      />
    </View>
  );
}

export default SubscribeView;
