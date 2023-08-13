import React from 'react'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';


const FiverBusiness = () => {
    return (
        <div className='w-full bg-[url("https://images.unsplash.com/photo-1620121692029-d088224ddc74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80")] bg-no-repeat bg-cover flex justify-center items-center py-20'>
            <div className='w-5/6 flex justify-between items-center'>
                <div className='w-5/6 text-white flex flex-col gap-10 '>
                    <div className='flex gap-3 items-center py-2'>
                        <h1 className='text-3xl font-bold'>fiverr <span className='font-normal text-3xl'>business.</span></h1>
                        <span className='px-2  rounded-full bg-[#584AFF] font-medium text-xs '>NEW</span>
                    </div>
                    <div className='w-4/6 flex flex-col gap-7'>
                        <h1 className='font-bold text-4xl'>A solution built for <span className='italic font-normal'>business</span></h1>
                        <p className=' text-2xl font-normal'>Upgrade to a curated experience to access vetted talent and exclusive tools</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-xl'><CheckCircleOutlineIcon style={{ color: "gray", fontSize: "30px" }} /> Talent matching</p>
                        <p className='text-xl'><CheckCircleOutlineIcon style={{ color: "gray", fontSize: "30px" }} /> Dedicated account management</p>
                        <p className='text-xl'><CheckCircleOutlineIcon style={{ color: "gray", fontSize: "30px" }} /> Team collaboration tools</p>
                        <p className='text-xl'><CheckCircleOutlineIcon style={{ color: "gray", fontSize: "30px" }} /> Business payment solutions</p>
                    </div>
                    <button className='w-[250px] font-bold text-xl bg-[#1DBF73] p-3 rounded-md mt-2 '>Explore Fiverr Business</button>
                </div>
                <div className=' w-[70%]'>
                    <img src="https://images.unsplash.com/photo-1665686308827-eb62e4f6604d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="" className='w-full rounded-sm' />
                </div>

            </div>
        </div>
    )
}

export default FiverBusiness