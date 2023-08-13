import React from 'react'

const Sender = ({desc}) => {
    return (
        <div className='sender flex flex-row-reverse self-end  gap-4 max-w-[600px] '>
            <img className='w-[50px] h-[50px] rounded-full' src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p className='bg-green-200 p-3 text-justify rounded-l-xl rounded-b-xl mt-2'>
               {desc}
            </p>
        </div>
    )
}

export default Sender