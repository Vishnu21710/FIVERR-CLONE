import React, {useState, useRef, useEffect} from 'react'
import GigCard from '../components/GigCard'
import HomeIcon from '@mui/icons-material/Home';
import { Button, TextField} from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useQuery } from '@tanstack/react-query';
import makeRequest from '../utils/makeRequest';
import { useLocation } from 'react-router-dom';


const Gigs = () => {


  const [menu, setMenu] = useState(false)
  const [sort, setSort] = useState('sales')
  const minRef = useRef()
  const maxRef = useRef()

  const location  = useLocation()

  console.log(location);

  const { isLoading, error, data, refetch } = useQuery({
  
    queryKey: ['repoData'],
    queryFn: () =>
      makeRequest.get(`/api/gigs/all${location.search || '?'}&min=${minRef.current.value}&max=${maxRef.current.value}&sort=${sort}`).then(res=>{
        return res.data
      })
  })

  console.log(sort);

  const reSort = (type)=>{
    setSort(type)
    setMenu(false)
  }

  const apply = ()=>{
    refetch()
    console.log(maxRef.current.value, minRef.current.value);
  }
  
  useEffect(()=>{
    refetch()
  }, [sort])

  return (
    <div className='flex justify-center mt-[150px]'>
      <div className='w-5/6'>
        <div className='flex flex-col gap-5'>
          <p className='flex gap-2 items-center text-gray-700 font-medium'><HomeIcon style={{ fontSize: "17px", color: "gray" }} /> / Video & Animation</p>
          <h1 className='text-4xl font-semibold'>Video Editing</h1>
          <p className='text-[#74767E] font-medium text-lg'>Create or improve your videos with video editing and post-production services.</p>
        </div>

        <div className='flex justify-between my-10'>
          <div className="left flex gap-2 items-center">
            <p>Budget</p>
            <TextField  type='number' inputRef={minRef } size='small' variant='outlined' label='Min' />
            <TextField  type='number' inputRef={maxRef} size='small' variant='outlined' label="Max" />
            <Button id='111' variant='contained' color='success' size='medium' onClick={apply}>Apply</Button>
          </div>
          <div className="right">
            <div className='relative '>
              <div className='flex items-center gap-2'><p className='text-[17px] font-medium text-gray-600 px-[5px] py-[2px]'>Sort By:</p> <Button id='1113' variant='plain'  size='medium' sx={{textTransform:"capitalize", fontWeight:"700", fontSize:"17px", paddingX:"5px", paddingY:"2px"}}  onClick={()=>setMenu(!menu)}>{sort === 'sales' ? 'Best Selling' : "Newest"} <KeyboardArrowDownIcon style={{rotate : `${menu ? "-180deg" : "0deg"}`, transition:"ease-out", transitionDuration:"0.2s"}}/></Button>
              </div>
              <div className={`absolute ${menu ? 'visible ' : 'hidden'} w-36 h-28 bg-white right-0 my-5 shadow-md rounded-md p-2 z-10`}>
                {
                  sort === 'sales' ? (
                    <p onClick={()=>reSort('createdAt')} className='font-medium text-gray-600 text-lg cursor-pointer '>Newest</p>  

                  ): (
                    <p onClick={()=>reSort('sales')} className='font-medium text-gray-600 text-lg cursor-pointer'>Best Selling</p>   
                  )
                }
                                      
              </div>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-wrap justify-between'>
        {
                 isLoading ? 'Please wait': error ? "Something Went Wrong": data?.map((gig, index)=>(
                    <GigCard {...gig} key={gig._id} />
                  ))
                }
        </div>
                

      </div>
    </div>
  )
}

export default Gigs