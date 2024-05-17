"use client"
import React from 'react'
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './_components/Checkoutform';
import { loadStripe } from '@stripe/stripe-js';
    const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHER_KEY);


function Checkout() {

    const options={
        mode:'payment',
        currency:'usd',
        amount:50
    }

  return (
    <div>
    <Elements stripe={stripePromise} options={options}>
    <CheckoutForm />
  </Elements></div>
  )
}

export default Checkout