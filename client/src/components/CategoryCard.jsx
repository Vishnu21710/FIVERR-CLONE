import React from 'react'

const CategoryCard = ({desc, title, img}) => {
  return (
    <div className='card min-w-[250px] h-[350px] relative  rounded-sm overflow-hidden cursor-pointer'>
            <div className='cover-image w-full h-full relative'>
                <img src={img} className='object-cover object-center h-full w-full' alt="" />
                <div className='absolute bg-black opacity-30 w-full h-full top-0 hover:opacity-10 transition-opacity ease-out'></div>
            </div>
            <div className='content absolute top-2 p-2 text-white '>
                    <p className='text-md font-semibold'>{desc}</p>
                    <h1 className='text-2xl font-bold'>{title}</h1>
            </div>
    </div>
  )
}

export default CategoryCard