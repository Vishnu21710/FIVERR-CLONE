import React from 'react'
import { Link } from 'react-router-dom'
import { Button, TextField } from '@mui/material'
import SendIcon from '@mui/icons-material/Send'
import Sender from '../components/Sender'
import Receiver from '../components/Receiver'
import { useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import makeRequest from '../utils/makeRequest'
import { useQueryClient, useMutation } from '@tanstack/react-query'

const Message = () => {

  const { id } = useParams()

  const user = JSON.parse(localStorage.getItem('currentUser'))

  const { isLoading, error, data, refetch } = useQuery({

    queryKey: ['message'],
    queryFn: () =>
      makeRequest.get(`/api/messages/${id}`).then(res => res.data)
  })

  const queryClient = useQueryClient()
  const mutation = useMutation({
      mutationFn: (message) => {
          return makeRequest.post(`/api/messages`, message)
      },
      onSuccess: () => {
          queryClient.invalidateQueries(['messages'])
          refetch()
      }
  })

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(e.target[0].value);
    mutation.mutate({
      conversationId : id,
      desc: e.target[0].value,

    })
    e.target[0].value = ''
  }


  return (
    <div className='flex justify-center mt-[150px]'>
      <div className='w-5/6 flex flex-col gap-5'>
        <h1 className='text-4xl font-semibold'>Message</h1>
        <span className='text-md text-gray-600 font-semibold'><Link to={'/messages'}>Messages</Link> / John Doe</span>
        <div className='flex flex-col gap-2'>
          {
            isLoading ? "Please Wait" : error ? 'Something went wrong' : (
              <div className='messages border-2 overflow-y-auto flex flex-col gap-5  h-[600px] p-3'>
                {
                  data.map((m, index) => (
                    m.userId === user._id ? <Sender {...m} key={m._id}/> : <Receiver {...m} key={m._id}/>
                  ))
                }

                {/* <Receiver/>
                          <Receiver/>
                          <Sender/> */}
              </div>
            )
          }

          <form className='write flex items-center gap-3' onSubmit={handleSubmit}>
            <TextField multiline maxRows={4} label="Type Message" fullWidth />
            <Button type='submit' className='border-2' variant='contained' color='success' sx={{ paddingY: "15px" }}><span className='flex items-center gap-1'><SendIcon />Send</span></Button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Message