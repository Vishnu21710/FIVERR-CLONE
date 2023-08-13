import React from 'react'
import StarIcon from '@mui/icons-material/Star';
import { Button } from '@mui/material';

const SellerInfo = ({gig_totalStars, gig_starNumber, username, description, image, country}) => {
  return (
    <div className='flex flex-col gap-5 w-[80%]'>
      <h1 className='text-2xl font-semibold'>About The Seller</h1>
      <div className='flex items-center gap-3 mt-4'>
        <img src={image || '/img/man.png'} alt="" className='w-[90px] h-[90px] rounded-full object-cover object-center' />
        <div className='flex flex-col gap-1'>
          <p className='text-xl font-semibold text-gray-700'>{username}</p>
          <p className='text-[18px]  text-gray-500'>{description}</p>
          {
                    !isNaN (gig_totalStars / gig_starNumber)  && 
                    <div className='flex items-center '>
                    {Array(Math.round(gig_totalStars / gig_starNumber)).fill().map((item, index)=>(
                    <StarIcon sx={{ color: 'orange' }} key={index} />
                    ))}
                    <p className='mx-2 text-lg font-medium'>{Math.round(gig_totalStars / gig_starNumber)}</p>
                  </div>
                  }
          <Button variant='outlined' sx={{textTransform: 'capitalize', color: 'gray', borderColor: 'gray', width: '40%', marginTop: '5px'}}>Contact Me</Button>
        </div>
      </div>
      <div className='flex flex-col gap-5 border-[1px] border-gray-200 p-3'>
        <div className='grid grid-cols-2 gap-5 '>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-gray-500'>From</p>
            <p className='text-gray-800 font-semibold text-lg'>{country}</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-gray-500'>Member Since</p>
            <p className='text-gray-800 font-semibold text-lg'>Sept 2017</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-gray-500'>Avg. Response Time</p>
            <p className='text-gray-800 font-semibold text-lg'>1 hour</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-gray-500'>Last Delivery</p>
            <p className='text-gray-800 font-semibold text-lg'>about 9 hours</p>
          </div>
          <div className='flex flex-col gap-1'>
            <p className='text-lg font-semibold text-gray-500'>Languages</p>
            <p className='text-gray-800 font-semibold text-lg'>English, German</p>
          </div>
        </div>
        <hr />
        <div className='flex flex-col gap-3'>
          <p className='text-justify text-gray-700 text-[17px] '>Are you pouring hours into your content, but not seeing the results you want? Hi there! I'm Diana and I'm here to help you!</p>
          <p className='text-justify text-gray-700 text-[17px] '>As a certified social media marketer and graphic designer with over 5 years of work experience, I know how to create compelling content that drives results.</p>
        </div>
      </div>
    </div>
  )
}

export default SellerInfo