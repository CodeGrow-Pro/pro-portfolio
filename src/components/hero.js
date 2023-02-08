import React from 'react'
import { Link } from 'react-router-dom';
import  "./hero.css";
const Hero = () => {
  return (
    <div  className='hero'>
          <div className='mask'>
              <img className='into-img' src="https://i.pinimg.com/736x/17/09/13/170913aa22526fc39e5bfef344d5440d--fantasy-places-fantasy-art.jpg" alt="image"/>
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