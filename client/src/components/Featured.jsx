import React, {useState} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';


const Featured = () => {
    const [input, setInput] = useState('')
    const navigate = useNavigate()


    const handleClick = ()=>{
            navigate(`/gigs?search=${input}`)
    }
    
    return (
        <div className='h-[690px] w-full  '>
            <div className="w-full flex  items-center justify-center h-full bg-[url('banner.png')] bg-cover bg-center">
                <div className='flex w-5/6 flex-col gap-5  '>
                    <h1 className='text-white font-semibold font-sans text-6xl'>Find the right <span className='italic'>freelance</span> <br /><span className='italic'>Service</span>, right away</h1>
                    <div className='  text-gray-400 w-3/6 flex items-center '>
                        <input onChange={(e)=>setInput(e.target.value)} type="text" className='p-3 rounded-l-md  w-[90%] text-gray-700'  placeholder='Search for any service'  />
                        <div onClick={handleClick} className='w-[10%] rounded-r-md flex justify-center bg-green-500  p-[12px] text-white '><SearchIcon/></div>
                    </div>
                    <div className='flex gap-2 text-white items-center'>
                        <span>Popular: </span>
                        <span className='custom_span'>Web Design</span>
                        <span className='custom_span'>Wordpress</span>
                        <span className='custom_span'>Logo Design </span>
                        <span className='custom_span'>AI services</span>
                    </div>
                    
                </div>
          
                

            </div>

        </div>
    )
}

export default Featured