import React, { useEffect, useState } from 'react'
import LanguageIcon from '@mui/icons-material/Language';
import SearchIcon from '@mui/icons-material/Search';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import makeRequest from '../utils/makeRequest';

const Navbar = () => {


  const [isVisible, setIsVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const {pathname} = useLocation()

  useEffect(()=>{
    if(pathname === '/'){
      const handleScroll = ()=>{
        window.scrollY > 0 ? setIsVisible(true) : setIsVisible(false)
      }
  
      window.addEventListener('scroll', handleScroll)
  
      return ()=>{
        window.removeEventListener('scroll', handleScroll)
      }
    }
    
  })

  const navigate = useNavigate()

  const handleLogout = async()=>{
    try {
      await makeRequest.post('/api/auth/logout')
      localStorage.setItem("currentUser", null)
      navigate('/')
    } catch (error) {
      
    }
    

  }

  const currentUser = JSON.parse(localStorage.getItem('currentUser'))

  console.log('navbar', currentUser);


  return (
    <div className={`navbar z-10 flex flex-col items-center  py-3 gap-3 ${isVisible || pathname !== "/" ? 'bg-white text-gray-700 fixed w-full top-0 transition-all ease-in duration-300': 'bg-transparent fixed top-0 w-full text-white'} `}>
          <div className='nav flex justify-between w-5/6 items-center relative'>
              <Link to={'/'} className='logo text-4xl font-bold'>fiverr<span className='text-green-500'>.</span></Link>
              <div className={`${isVisible || pathname !== '/' ?  'flex': 'hidden'} border-[1px] border-gray-500 rounded-sm `}>
                <input type="text" placeholder='What service are you looking for today ? ' className='py-2 px-3 rounded-sm  w-[600px]'/>
                <button className='bg-gray-900 text-white px-2'><SearchIcon/></button>
              </div>
              <ul className='flex gap-6 text-lg font-medium items-center '>
                <li>Fiverr Business</li>
                <li>Explore</li>
                <li className='flex items-center gap-1'><LanguageIcon/>English</li>
                {!currentUser?.isSeller && <li>Become a Seller</li>}
                {!currentUser && <Link to={'/login'}>Sign In</Link>}
               {!currentUser && <button className={`border-[1px]  px-[17px] py-2 ${isVisible || pathname !== '/' ? 'border-gray-500 hover:text-white' : 'border-white' } rounded-sm text-sm hover:border-green-500 hover:bg-green-500 transition-colors ease-out`}>Join</button>}
               {currentUser && (
                <div className='user flex items-center gap-2 border-[1px] border-gray-200 cursor-pointer hover:bg-green-500 hover:border-green-500 transition-colors ease-out rounded-sm p-2' onClick={()=>setOpen(!open)} >
                    <img src={currentUser?.image || '/img/man.png'} alt="" className='h-[35px] w-[35px] rounded-full object-cover'/>
                    <p>{currentUser?.username}</p>
                </div>
               )}
               {
                open && (
                  <div className='flex flex-col items-start gap-1 absolute border-2 border-gray-300 rounded-md top-[70px] right-0 p-[20px] text-gray-500 w-[200px] bg-white'>
                    {
                      currentUser?.isSeller && (
                        <div className='flex flex-col gap-1'>
                          <Link onClick={()=>setOpen(false)} to={'/my-gigs'}>My Gigs</Link>
                          <Link onClick={()=>setOpen(false)} to={'/add'}>Add Gigs</Link>
                        </div>
                      )
                    }
                    <Link onClick={()=>setOpen(false)} to={'/orders'}>Orders</Link>
                    <Link onClick={()=>setOpen(false)} to={'/messages'}>Messages</Link>
                    <Link onClick={()=>{
                      handleLogout()
                      setOpen(false)
                    }}>Logout</Link>
                  </div>
                )
               }
              </ul>
          </div>
        
          <div className={`menu w-full  flex-col items-center ${isVisible || pathname !== "/" ? 'flex' : 'hidden'} `}>
          <hr  className='border-[0.5px] border-gray-200 w-full'/>
            <div className='flex w-5/6 justify-between items-center mt-2 text-lg '>
              <span>Graphic Design</span>
              <span>Digital Marketing</span>
              <span>Writing & Translation</span>
              <span>Video & Animation</span>
              <span>Programming & Tech</span>
            </div>
              
          </div>
    </div>
  )
}

export default Navbar

