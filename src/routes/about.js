import React from 'react'
import AboutContent from '../components/aboutcontent'
import Footer from '../components/footer'
import Hero2 from '../components/hero2'
import Navbar from '../components/navbar'

const About = () => {
  return (
    <div>
        <Navbar />
        <Hero2 heading="About" text="I am a Friendly Front-end Developer ."/>
        <AboutContent />
        <Footer />
    </div>
  )
}

export default About