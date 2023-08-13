import React from 'react'

const ProjectCard = ({img, pp, username, category}) => {
  return (
    <div className='min-w-[350px] min-h-[350px shadow-md drop-shadow-sm rounded-sm cursor-pointer hover:scale-105 transition-transform ease-out '>
        <img src={img} alt="" className='h-[77%] w-full hover:opacity-75  transition-opacity ease-in'/>
        <div className='flex items-center gap-5 mx-4 h-[23%]'>
                <img src={pp} alt="" className='w-[40px] h-[40px] rounded-full object-cover object-center'/>
                <div className='flex flex-col '>
                    <h1>{category}</h1>
                    <p>{username}</p>
                </div>
        </div>
    </div>
  )
}

export default ProjectCard