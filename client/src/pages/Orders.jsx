import React from 'react'
import OrderTable from '../components/OrderTable'
import { useQuery } from '@tanstack/react-query'
import makeRequest from '../utils/makeRequest'

const Orders = () => {

  const user = JSON.parse(localStorage.getItem("currentUser"))
  
  const { isLoading, error, data, refetch } = useQuery({

    queryKey: ['orders'],
    queryFn: () =>
      makeRequest.get(`/api/orders`).then(res => res.data)
  }) 

  return (
    <div className='flex justify-center mt-[150px]'>
          <div className='w-5/6 flex flex-col gap-10 my-5'>
                <div>
                  <h1 className='text-4xl font-semibold'>Orders</h1>
                </div>
                {
                  isLoading ? 'Please wait...' : error ? "Something went wrong" : <OrderTable {...user} data={data}/>
                }
                
          </div>
    </div>
  )
}

export default Orders