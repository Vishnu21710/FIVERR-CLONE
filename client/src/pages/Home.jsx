import React from 'react'
import Featured from '../components/Featured'
import TrustedBy from '../components/TrustedBy'
import CategoryCard from '../components/CategoryCard'
import Slider from '../components/Slider'
import HomeFeatures from '../components/HomeFeatures'
import FiverBusiness from '../components/FiverBusiness'
import { cards, projects } from '../data'
import ProjectCard from '../components/ProjectCard'

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
      <Slider data={cards} type="category"/>
      <HomeFeatures/>
      <FiverBusiness/>
      <Slider data={projects} type={"business"}/>
    </div>
  )
}

export default Home