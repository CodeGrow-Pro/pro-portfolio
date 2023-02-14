import React from 'react'
import Footer from '../components/footer'
import Hero from '../components/hero'
import Navbar from '../components/navbar'
import WorkCard from '../components/workCard'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <WorkCard />
      <Footer />
    </div>
  )
}

export default Home
