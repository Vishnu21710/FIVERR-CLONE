import React, {useEffect, useState} from 'react'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import makeRequest from '../utils/makeRequest.js';
import { useParams } from 'react-router-dom';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe("pk_test_51NQNl3SGAX1Bovgyvtkci38dRDda7OLGcXpIfIUyepCSQbRvybwTPyaivWksNEuIWLYR0X6K1U0pxbM16I7BsDpV00U9ZwtOUe");


const Pay = () => {

  const {id} = useParams()
  console.log(id);
  const [clientSecret , setClientSecret] = useState('')

  useEffect(()=>{
    const makeReq = async()=>{
    try {
        const res = await makeRequest.post(`/api/orders/create-payment-intent/${id}`)
        console.log(res.data);
        setClientSecret(res.data.client_Secret)
      } catch (error) {
        console.log(error);
      }
    }   
      makeReq()
  }, [])

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='mt-[150px]'>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
    </div>
  )
}

export default Pay