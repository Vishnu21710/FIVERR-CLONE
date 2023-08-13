import React from 'react'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'
import TableComponent from '../components/TableComponent'
import { useQuery,  useMutation, useQueryClient } from '@tanstack/react-query'
import makeRequest from '../utils/makeRequest'

const MyGigs = () => {

  const currentUser = JSON.parse(localStorage.getItem('currentUser')) 

  const queryClient = useQueryClient()

  const { isLoading, error, data, refetch } = useQuery({

    queryKey: [`myGigs`],
    queryFn: () =>
      makeRequest.get(`/api/gigs/all?userId=${currentUser._id}`).then(res => res.data)
  })

  const mutation = useMutation({
    mutationFn: (id)=>{
      return makeRequest.delete(`/api/gigs/delete/${id}`)
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries('myGigs')
    }
  })

  const handleDelete = (id)=>{
        mutation.mutate(id)
  }

  return (
    <div className='mt-[150px] flex justify-center my-10'>
      <div className='w-5/6 flex flex-col gap-5'>
        <div className='flex justify-between items-center'>
          <h1 className='text-4xl font-semibold'>My Gigs</h1>
          <Link to={'/add'}><Button variant='contained' color='success'>Add Gig</Button></Link>
        </div>
        {
          isLoading ? 'Please Wait' : error ? 'Something went wrong' :  <TableComponent handleDelete = {handleDelete} data={data}/>
        }

      </div>

    </div>
  )
}

export default MyGigs