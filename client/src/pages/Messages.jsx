import React from 'react'
import MessageTable from '../components/MessageTable'
import { useQuery } from '@tanstack/react-query'
import makeRequest from '../utils/makeRequest'


const Messages = () => {

  const user = JSON.parse(localStorage.getItem('currentUser'))



  const { isLoading, error, data, refetch } = useQuery({

    queryKey: ['conversations'],
    queryFn: () =>
      makeRequest.get(`/api/conversations`).then(res => res.data)
  })


  return (
    <div className='flex justify-center mt-[150px]'>
          <div className='w-5/6 flex flex-col gap-5'>
                <h1 className='text-4xl font-semibold'>Messages</h1>
                {
                  isLoading ? 'Please wait' : error ? "Something went wrong" :  <MessageTable {...user} data={data}/>
                }
         </div>
    </div>
  )
}

export default Messages