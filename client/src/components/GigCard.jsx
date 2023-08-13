import React, { useState } from 'react'
import { gigs } from '../data'
import StarIcon from '@mui/icons-material/Star';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Link, useParams } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';


const GigCard = ({ _id, gig_description, gig_images, userId, gig_totalStars, gig_starNumber, gig_price }) => {

  const [currentImage, setCurrentImage] = useState(0)

  function handleLeft() {
    setCurrentImage(currentImage === 0 ? 3 : currentImage - 1)
    // console.log(currentImage);
  }
  function handleRight() {
    setCurrentImage(currentImage === 3 ? 0 : currentImage + 1)
    // console.log(currentImage);
  }


  const { isLoading, error, data, refetch } = useQuery({

    queryKey: [`${userId}`],
    queryFn: () =>
      makeRequest.get(`/api/users/user/${userId}`)
  })

  console.log(data?.data);

  return (
    <div className='h-[400px] w-[330px] flex flex-col  relative z-0'>
      <Link className='w-[full] h-[50%] overflow-x-hidden relative  ' to={`/gig/${_id}`}>
        <div className='w-[1320px]  h-[100%] flex transition-all ease-out duration-200' style={{ transform: `translateX(-${currentImage * 330}px)` }}>
          {/* <img className='w-[330px] h-[100%] object-cover rounded-md' src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <img className='w-[330px] h-[100%] object-cover rounded-md' src="https://images.pexels.com/photos/1062280/pexels-photo-1062280.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <img className='w-[330px] h-[100%] object-cover rounded-md' src="https://images.pexels.com/photos/4145190/pexels-photo-4145190.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
          <img className='w-[330px] h-[100%] object-cover rounded-md' src="https://images.pexels.com/photos/5708069/pexels-photo-5708069.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> */}
          {
            gig_images.map((image, index) => (
              <img key={index} className='w-[330px] h-[100%] object-cover rounded-md' src={image} alt="" />
            ))
          }
        </div>
        <div className='flex  justify-center items-center gap-3  text-white font-bold absolute  w-full bottom-3'>
          <p className={`${currentImage === 0 ? ' bg-blue-300 scale-150' : ''} w-[7px] h-[7px] flex items-center  rounded-full bg-white`}></p>
          <p className={`${currentImage === 1 ? ' bg-blue-300 scale-150' : ''} w-[7px] h-[7px] flex items-center  rounded-full bg-white`}></p>
          <p className={`${currentImage === 2 ? ' bg-blue-300 scale-150' : ''} w-[7px] h-[7px] flex items-center  rounded-full bg-white`}></p>
          <p className={`${currentImage === 3 ? ' bg-blue-300 scale-150' : ''} w-[7px] h-[7px] flex items-center  rounded-full bg-white`}></p>
        </div>
      </Link>

      <div className='flex flex-col gap-2 '>
        {
          isLoading ? "Please Wait" : error ? "Something went wrong" : (
            <div className='py-2 flex items-center gap-3' >
              <img className='w-[30px] h-[30px] object-cover object-center rounded-full' src={data.data.image || "/img/man.png"} alt="" />
              <p className='font-bold '>{data.data.username}</p>
            </div>
          )
        }

        <p className='text-gray-600'>{gig_description}</p>
        <div className='flex  items-center'>
          <p className='flex gap-1 items-center'><span>{!isNaN (gig_totalStars / gig_starNumber) && Math.round(gig_totalStars/ gig_starNumber)}</span><StarIcon style={{ fontSize: '20px' }} /><span className='font-semibold text-lg'></span><span className='text-gray-500'>(433)</span></p>
        </div>
        <p className='flex items-center font-semibold'>From <CurrencyRupeeIcon style={{ fontSize: "17px", marginLeft: "10px" }} />{gig_price}</p>
      </div>
      <button onClick={handleLeft} className={`absolute bg-gray-50 shadow-xl  w-[30px] h-[30px]  rounded-full top-[20%] left-0`}><ChevronLeftIcon /></button>
      <button onClick={handleRight} className={`absolute bg-gray-50 shadow-xl  w-[30px] h-[30px]  rounded-full  top-[20%] right-0`}><ChevronRightIcon /></button>
    </div>
  )
}



export default GigCard