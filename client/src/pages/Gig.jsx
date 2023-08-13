import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import Slider from 'infinite-react-carousel';
import BasicTabs from '../components/GigOptions';
import SellerInfo from '../components/SellerInfo';
import Reviews from '../components/Reviews';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';
import TotalReviews from '../components/TotalReviews';

const Gig = () => {

  const { id } = useParams()

  const { isLoading, error, data, refetch } = useQuery({

    queryKey: ['gig'],
    queryFn: () =>
      makeRequest.get(`/api/gigs/gig/${id}`).then(res => res.data)
  })

  const userId = data?.userId

  const { isLoading:isPending, error:errorUser, data:userData } = useQuery({

    queryKey: ['user'],
    queryFn: () =>
      makeRequest.get(`/api/users/user/${userId}`).then(res => res.data),
      enabled: !!userId
  })




  return (

    <div className='flex justify-center mt-[150px]'>
      {
        isLoading ? "Please Wait" : error ? 'Something went wrong' : (
          <div className='w-5/6 relative'>
            <div className='flex flex-col gap-5'>
              <p className='flex gap-2 items-center text-gray-700 font-medium'><HomeIcon style={{ fontSize: "17px", color: "gray" }} /> / Video & Animation</p>
              <h1 className='text-4xl font-semibold'>Video Editing</h1>
            </div>
            <div className='w-full  flex justify-between my-5'>
              <div className='left w-[60%] flex flex-col gap-5'>
                <h1 className='text-3xl font-bold text-gray-800'>{data.gig_title}</h1>
                <div className='flex items-center gap-8 my-7'>
                  {
                    isPending ? "Please Wait" : errorUser ? `${errorUser}` : (
                      <div className='flex items-center gap-3'>
                        <img className='w-[40px] h-[40px] rounded-full' src={userData?.image||'/img/man.png'} alt="" />
                        <p className='text-gray-600 font-medium text-lg'>{userData?.username}</p>
                      </div>
                    )
                  }

                  <span>|</span>
                  {
                    !isNaN(data.gig_totalStars / data.gig_starNumber) &&
                    <div className='flex items-center '>
                      {Array(Math.round(data.gig_totalStars / data.gig_starNumber)).fill().map((item, index) => (
                        <StarIcon sx={{ color: 'orange' }} key={index} />

                      ))}

                      <p className='mx-2 text-lg font-medium'>{Math.round(data.gig_totalStars / data.gig_starNumber)}</p>
                    </div>
                  }


                </div>
                <Slider wheel="true">
                  {data.gig_images.map((img, index) => (
                    <img src={img} key={index} alt="" />

                  ))}
                </Slider>
                <div className="about flex flex-col gap-3 my-4">
                  <h1 className='text-2xl font-semibold '>About this Gig</h1>
                  <p className='text-justify'>{data.gig_description}</p>
                </div>
                {
                  isPending ? "Please wait" : error ?  "Something went wrong" :   <SellerInfo {...userData} {...data}/>
                }
              
                <div>
                  <h1 className='text-2xl font-semibold my-5'>Reviews</h1>
                  <TotalReviews gig_id = {data._id}/>
                </div>

              </div>
              <div className="right w-[35%] h-[500px] border-2  sticky top-36">
                {
                  isLoading ? "please Wait" : error ? "Something went wrong": (
                <BasicTabs {...data} gig_id = {id} isLoading={isLoading} error={error} />

                  )
                }
              </div>
            </div>
          </div>

        )
      }
    </div>

  )
}

export default Gig