import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_BraI9O1vP6wdULF8E8RU8JvO00JagEYIOn';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='Hanger Inc'
      billingAddress
      shippingAddress
      image='https://png.pngtree.com/png-vector/20190328/ourmid/pngtree-hanger-icon-design-template-vector-isolated-png-image_872552.jpg'
      description={`Your total is$${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
