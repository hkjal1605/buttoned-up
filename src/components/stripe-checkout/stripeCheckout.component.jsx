import React from 'react';

import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForPayment = price * 100;
    const publishableKey = 'pk_test_51GwpU2Fo5XmFAfjGPojSqx7xuCiHbcnXkXhRknLiC2TIqt0cdudEpB73jh9Zn58dj0ZAHVGcghLwezav9ZnEIGm500alh1iXTY'
    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout 
            label='Pay Now'
            name='Buttoned Up'
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForPayment}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
