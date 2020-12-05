import StripeCheckout from 'react-stripe-checkout';

import React from 'react';

const StripeCheckoutButton = ({ price }) => {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51Hv0ZAIm0d2vIo9YkXUYU0t3FNYjgeLBcl505vrWBKXPSl7Hr3cfjGbzTcjeh3Ct4CVbAPPc8YFGrm2vmuzvXkWQ007jmgChx6';
	const onToken = (token) => {
		console.log(token);
		alert('Payment Succesful');
	};
	return (
		<StripeCheckout
			label="Pay Now"
			name="CRN Clothing"
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is €${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			toke={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;
