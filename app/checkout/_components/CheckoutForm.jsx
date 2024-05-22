// app/checkout/_components/CheckoutForm.jsx
import React from 'react';
import { PaymentElement, useStripe, useElements } from '@stripe/react-stripe-js';

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        // Make sure to change this to your payment completion page
        return_url: 'http://localhost:3000/success',
      },
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
    } else {
      // The payment has been processed!
      if (result.paymentIntent.status === 'succeeded') {
        console.log('Payment succeeded!');
      }
    }
  };

  return (
    <div className='container bg-slate-100 mt-20'>
    <div className="flex flex-col md:flex-row items-center ">
      <div className="md:w-1/2">
        <img src="\logo fam.PNG" alt="Imagen" />
      </div>
      <div className="md:w-1/2 md:px-8">
        <form onSubmit={handleSubmit}>
          <PaymentElement />
          <button className="mt-4 md:mt-0 relative inline-flex items-center justify-center px-5 py-2 text-base font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-600 rounded" disabled={!stripe}>
            Submit
          </button>
        </form>
      </div>
    </div>
  </div>
  
  );
}

export default CheckoutForm;
