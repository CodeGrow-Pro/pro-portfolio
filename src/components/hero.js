import React from 'react'
import { Link } from 'react-router-dom';
import  "./hero.css";
const Hero = () => {
  return (
    <div  className='hero'>
          <div className='mask'>
              <img className='into-img' src="https://media.istockphoto.com/id/824197440/photo/modern-tech-for-a-modern-workplace.jpg?b=1&s=170667a&w=0&k=20&c=u07MY-if2pvMowwz-KHBXAzSmddj0SSvVmIZreT_eyE=" alt="image"/>
          </div>
          <div className='content'>
            <p>Hi . I'M A FREELANCER</p>
            <h1>Ract Developer</h1>
            <div>
                <Link to="/project" className='btn'>Projects</Link>
                <Link to="/contact" className='btn btn-light'>Contact</Link>
            </div>
          </div>
    </div>
  )
}

export default Hero