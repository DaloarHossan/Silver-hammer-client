import React, { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
	const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
	const handleSubmit = async (event) => {
		event.preventDefault();
	
		if (!stripe || !elements) {
		  return;
		}
		const card = elements.getElement(CardElement);
	
		if (card == null) {
		  return;
		}
		const {error, paymentMethod} = await stripe.createPaymentMethod({
			type: 'card',
			card,
		  });
	  
		  if (error) {
			setCardError(error?.message || '')
        setSuccess('');
		  } else {
			console.log('[PaymentMethod]', paymentMethod);
		  }
	return (
		<div>
			<form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                
            </form>
		</div>
	);
};
};
export default CheckoutForm;