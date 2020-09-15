import React from 'react';
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price*100;
    const publishableKey = 'pk_live_51GxZ6jBbQa0R7m2fT2OpTOQsWC1HC7bKgv9A2BJ8LTksdAFsYXE9YZJrKW2yR7ofYc4UQMojr28EEP1TF8RTx77P00DY7dKX4B'
    const onToken = (token) => {
        console.log(token)
        alert('Payment Successful')
    } 
   
    return (
        <StripeCheckout
            label='Pay Now'
            name='BB Shop'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
        />
    );
}

export default StripeCheckoutButton;
