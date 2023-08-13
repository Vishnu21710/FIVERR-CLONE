import React from 'react'
import CopyrightIcon from '@mui/icons-material/Copyright';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AccessibilityIcon from '@mui/icons-material/Accessibility';
import LanguageIcon from '@mui/icons-material/Language';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const Footer = () => {
  return (
    <div className='w-full flex flex-col items-center gap-10'>
      <div className='w-5/6 flex justify-between'>
          <div className='flex flex-col gap-3 text-[#74767E] font-medium text-lg'>
            <h1 className='text-gray-900 font-bold'>Categories</h1>
            <p>Graphics & Design</p>
            <p>Writing & Translation</p>
            <p>Video & Animation</p>
            <p>Digital Marketing</p>
            <p>Music & Audio</p>
            <p>Programming & Tech</p>
            <p>Data</p>
            <p>Business</p>
            <p>Lifestyle</p>
            <p>Photography</p>
            <p>End-to-End Projects</p>
            <p>Sitemap</p>
          </div>
          <div className='flex flex-col gap-3 text-[#74767E] font-medium text-lg'>
            <h1 className='text-gray-900 font-bold'>About</h1>
            <p>Careers</p>
            <p>Press & News</p>
            <p>Partnerships</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Intellectual Property Claims</p>
            <p>Investor Relations</p>
          </div>
          <div className='flex flex-col gap-3 text-[#74767E] font-medium text-lg'>
            <h1 className='text-gray-900 font-bold'>Support</h1>
            <p>Help & Support</p>
            <p>Trust & Safety</p>
            <p>Selling on Fiverr</p>
            <p>Buying on Fiverr</p>
            <p>Fiver Guides</p>
          </div>
          <div className='flex flex-col gap-3 text-[#74767E] font-medium text-lg'>
            <h1 className='text-gray-900 font-bold'>Community</h1>
            <p>Customer Success Stories</p>
            <p>Community Hub</p>
            <p>Forum</p>
            <p>Events</p>
            <p>Blog</p>
            <p>Influencers</p>
            <p>Affiliates</p>
            <p>Podcast</p>
            <p>Invite a Friend</p>
            <p>Become a Seller</p>
            <p>Community Standards</p>
          </div>
          <div className='flex flex-col gap-3 text-[#74767E] font-medium text-lg'>
            <h1 className='text-gray-900 font-bold'>More from Fiverr</h1>
            <p>Fiverr Enterprise</p>
            <p>Fiverr Business</p>
            <p>Fiverr Pro</p>
            <p>Fiverr Logo Maker</p>
            <p>Get Inspired</p>
            <p>Fiver Select</p>
            <p>Clear Voice <span>Content Marketing</span></p>
            <p>Fiver Workspace<span>Invoice Software</span></p>
            <p>Learn<span>Online Courses</span></p>
            <p>Working Not Working</p>
          </div>
        
      </div>

      <div className='w-5/6 flex justify-between text-[#74767E] border-t-[1px] border-t-gray-300]'>
          <div className='flex gap-5 items-center py-6'>
            <h1 className='text-3xl font-bold '>fiverr<span>.</span></h1>
            <p className='text-sm text-gray-400'><CopyrightIcon style={{fontSize:'15px'}}/> Fiverr International Ltd. 2023</p>
          </div>
          <div  className='flex items-center gap-10'>
            <div className='flex gap-3'>
              <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><TwitterIcon/></button>
              <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><FacebookIcon/></button>
              <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><LinkedInIcon/></button>
              <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><PinterestIcon/></button>
              <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><InstagramIcon/></button>
            </div>
            <div className='flex items-center gap-3'>
                  <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><LanguageIcon/> English</button>
                  <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><CurrencyRupeeIcon/> INR</button>
                  <button className='p-2 rounded-full hover:bg-gray-100 ease-out transition-colors'><AccessibilityIcon/></button>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer