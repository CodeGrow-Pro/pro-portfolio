import React from 'react'
import Footer from '../components/footer';
import Hero2 from '../components/hero2';
import Navbar from '../components/navbar';
import PriceCard from '../components/pricingCartd';
import WorkCard from '../components/workCard';

const Project = () => {
  return (
    <div>
        <Navbar />
        <Hero2 heading="My Projects" text="Some of my most recent work"/>
        <WorkCard />
        <PriceCard />
        <Footer />
        
    </div>
  )
}

export default Project;