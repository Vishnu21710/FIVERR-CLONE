import React from 'react'

const TrustedBy = () => {
  return (
    <div className='bg-gray-50 flex justify-center p-4'>
            <div className='w-3/6 flex items-center'>
                <div>
                        <h1 className='text-gray-300 text-lg font-bold whitespace-nowrap '>Trusted By:</h1>
                </div>
                <span className='flex justify-around px-3 w-full'>
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/meta.12b5e5c.png" alt="" />
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/google.61e78c8.png" alt="" />
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/netflix.96c5e3f.png" alt="" />
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/pandg.0f4cfc2.png" alt="" />
                    <img src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/paypal.305e264.png" alt="" />
                </span>
            </div>
    </div>
  )
}

export default TrustedBy