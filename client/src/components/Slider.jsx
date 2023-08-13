import React, {useRef} from 'react'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { cards } from '../data'
import CategoryCard from './CategoryCard';
import ProjectCard from './ProjectCard';



const Slider = ({data, type}) => {

    const sliderRef = useRef()

    const scrollLeft = ()=>{
        sliderRef.current.scrollBy({left:-600, behavior:"smooth"})
    }
    const scrollRight = ()=>{
        sliderRef.current.scrollBy({left:600, behavior:"smooth"})
    }

    return (
        <div className='slider w-full flex justify-center relative items-center h-[600px] z-0 '>
            <div className='flex w-5/6 flex-col  '>
                <h1 className='text-4xl text-gray-600 font-bold mb-7 pt-6'>Popular Services</h1>
                <div className='flex  items-center w-full overflow-x-auto '>
                    
                    <div className='flex overflow-x-auto gap-10 scrollbar-hide py-3 ' ref={sliderRef}>

                        {
                            data.map((item, index) => (
                                type ==='category' ? <CategoryCard key={item.id} img={item.img} title={item.title} desc={item.desc} /> :
                                <ProjectCard key={item.id} img={item.img} pp={item.pp} username={item.username} category={item.cat}/>
                            ))
                            
                        }
                    </div>
                    
                </div>
                <button onClick={scrollLeft} className='bg-gray-50 shadow-xl p-3 w-[50px] rounded-full text-gray-800 absolute left-[7%] top-[53%]'><ChevronLeftIcon /></button>
                <button onClick={scrollRight} className='bg-gray-50 shadow-xl p-3 rounded-full w-[50px] text-gray-800 absolute right-[7%] top-[53%]'><ChevronRightIcon /></button>
            </div>

        </div>
    )
}

export default Slider