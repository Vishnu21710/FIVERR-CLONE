import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import makeRequest from '../utils/makeRequest'

const Success = () => {

  const {search} = useLocation()  
  const navigate = useNavigate()
  const params = new URLSearchParams(search)
  const paymentIntent = params.get("payment_intent")

  useEffect(()=>{
    const makereq = async()=>{
            try {
                const res = await makeRequest.put('/api/orders', {paymentIntent})
                console.log(res);
                setTimeout(()=>{
                    navigate('/orders')
                }, 5000)
            } catch (error) {
                console.log(error);
            }
    }
    makereq()
  },[])

  return (
    <div className='flex justify-center mt-[150px]'>
        <div className='w-5/6'>
        Payment Successful you are now being directed to the orders page....
        </div>
        </div>
  )
}

export default Success