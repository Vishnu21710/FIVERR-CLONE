import React from 'react'
import Reviews from './Reviews'
import makeRequest from '../utils/makeRequest'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { TextField, FormControl, MenuItem, Select, InputLabel, Button, capitalize } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';


const TotalReviews = ({ gig_id }) => {


  const queryClient = useQueryClient()

  const { isLoading, error, data, refetch } = useQuery({

    queryKey: [`${gig_id}`],
    queryFn: () =>
      makeRequest.get(`/api/reviews/${gig_id}`).then(res => res.data)
  })

  const mutation = useMutation({
    mutationFn: (review)=>{
      return makeRequest.post('/api/reviews/', review)
    },
    onSuccess: ()=>{
      queryClient.invalidateQueries('reviews')
    }
  })


  const handleSubmit = (e)=>{
      e.preventDefault()
      const review_description = e.target[0].value
      const review_star = e.target[2].value
      console.log(review_description, review_star);
      mutation.mutate({gig_Id: gig_id, review_description, review_star})
  }

  

  return (
    <div>
      {
        isLoading ? "Please Wait" : error ? "Something went wrong" :
          data.map((review, index) => (
            <Reviews {...review} key={review._id} />
          ))
      }
      <form className='add-review flex gap-5 mt-10' onSubmit={handleSubmit}>
        <TextField   minRows={10} placeholder='Write Your Opinion .....' label="Give Review" fullWidth />
          <select
          
          >
            <option value={1}>
                1
            </option>
            <option value={2}>
                  2
            </option>
            <option value={3}>
              3
            </option>
            <option value={4}>
                    4
            </option>
            <option value={5}>
              5
            </option>
          </select>

        <Button variant='contained' color='success' type='submit'>Send</Button>
      </form>

    </div>
  )
}

export default TotalReviews