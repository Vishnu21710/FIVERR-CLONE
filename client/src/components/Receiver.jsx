import React from 'react'

const Receiver = ({desc}) => {
    return (
        <div className='receiver flex gap-4 max-w-[600px] '>
            <img className='w-[50px] h-[50px] rounded-full' src="https://images.pexels.com/photos/720606/pexels-photo-720606.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" />
            <p className='bg-blue-200 p-3 text-justify rounded-r-xl rounded-b-xl mt-2'>
                {desc}
            </p>
        </div>
    )
}

export default Receiver