import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import Qualities from '../components/Qualities'
import Menu from '../components/Menu'
import OurDetails from '../components/OurDetails'
import Team from '../components/Team'
import Reservation from '../components/Reservation'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <HeroSection/>
      <About/>
      <Qualities/>
      <Menu/>
      <OurDetails/>
      <Team/>
      <Reservation/>
      <Footer/>
    </>
  )
}

export default Home