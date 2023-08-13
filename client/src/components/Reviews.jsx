import React, {useState} from 'react'
import StarIcon from '@mui/icons-material/Star';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';

const Reviews = ({user_Id, review_description, review_star}) => {

    const [helpfull, setHelpfull] = useState(false)

    const { isLoading, error, data, refetch } = useQuery({

        queryKey: [user_Id],
        queryFn: () =>
          makeRequest.get(`/api/users/user/${user_Id}`).then(res => res.data)
      }) 
    
      console.log(data);
    return (
        <div className='flex flex-col gap-3 my-3 '>
            {
                isLoading ? "Please Wait" : error ? "Something went wrong" :
                <div className='flex items-center gap-2  my-3'>
                <img src={data.image || '/img/man.png'} alt="" className='w-[50px] h-[50px] rounded-full object-cover object-center' />
                <p className='text-xl font-semibold text-gray-700'>{data.username}</p>
            </div>
            }
            
            <p className='w-[70%]'>{review_description}</p>
            <div className='flex items-center '>
                {
                    Array(review_star).fill().map((item, index)=>(
                <StarIcon sx={{ color: 'orange' }} key={index}/>

                    ))
                }
                <p className='mx-2 text-lg font-medium'>{review_star}</p>
            </div>
            <div className='flex gap-3 items-center'>
                <p className='text-md font-medium text-gray-800'>Helpfull ? </p>
                <span onClick={()=>setHelpfull(true)} className='flex items-center gap-2'><ThumbUpIcon className='cursor-pointer'/> Yes</span>
                <span onClick={()=>setHelpfull(false)} className='flex items-center gap-2'><ThumbDownIcon className='cursor-pointer'/> No</span>
            </div>
            <hr className='mt-3'/>

        </div>
    )
}

export default Reviews