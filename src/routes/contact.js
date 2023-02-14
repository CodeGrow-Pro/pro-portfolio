import React from 'react'
import Footer from '../components/footer'
import Form from '../components/form'
import Hero2 from '../components/hero2'
import Navbar from '../components/navbar'

const Contact = () => {
  return (
    <div>
    <Navbar />
    <Hero2 heading="Get In Touch" text="Let's have a chat . . . ."/>
    <Form />
    <Footer />
</div>
  )
}

export default Contact