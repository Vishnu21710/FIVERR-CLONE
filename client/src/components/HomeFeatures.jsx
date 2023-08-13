import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const HomeFeatures = () => {
    return (
        <div className='main flex justify-center items-center bg-[#F1FDF7] py-24'>
            <div className='w-5/6 flex justify-between gap-7 items-center '>       
                <div className='content w-[40%] flex flex-col gap-5 text-2xl text-justify'>
                <h1 className='text-4xl font-bold text-[#404145]'>The best part? Everything.</h1>
                    <div className='flex flex-col '>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#6B646A]'><CheckCircleOutlineIcon /></span>
                            <p className='text-[#404145] font-semibold'>Stick to your budget</p>
                        </div>
                        <p className='text-[#6B646A]'>Find the right service for every price point. No hourly rates, just project-based pricing.</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#6B646A]'><CheckCircleOutlineIcon /></span>
                            <p className='text-[#404145] font-semibold'>Get quality work done quickly</p>
                        </div>
                        <p className='text-[#6B646A]'>Hand your project over to a talented freelancer in minutes, get long-lasting results.</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#6B646A]'><CheckCircleOutlineIcon /></span>
                            <p className='text-[#404145] font-semibold'>Pay when you're happy</p>
                        </div>
                        <p className='text-[#6B646A]'>Upfront quotes mean no surprises. Payments only get released when you approve.</p>
                    </div>
                    <div className='flex flex-col'>
                        <div className='flex items-center gap-1'>
                            <span className='text-[#6B646A]'><CheckCircleOutlineIcon /></span>
                            <p className='text-[#404145] font-semibold'>Count on 24/7 support</p>
                        </div>
                        <p className='text-[#6B646A]'>Our round-the-clock support team is available to help anytime, anywhere.</p>
                    </div>
                </div>
                <div className='video w-[50%]'>
                        <video src='./img/video.mp4' controls ></video>
                </div>
            </div>
        </div>
    )
}

export default HomeFeatures