import './aboutcontent.css'
import React from 'react'
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className="left">
              <h1>Who Am I ?</h1>
              <p>I'm a react front-end developer . I create  responsive secure websites for my clients .</p>
              <Link to="/contact">
                <button className='btn'>Contact</button>
              </Link>
        </div>
        <div className="right">
                <div className="img-container">
                    <div className="top">
                        <img src="https://madewithreact.com/assets/img/react-light-bootstrap-dashboard-pro.jpg?v=1f2ec887e3" className="img" alt="true" />
                    </div>
                    <div className="bottom">
                        <img src="https://s3.amazonaws.com/creativetim_bucket/products/497/original/Cover_Purity_Chakra_FREE_-_Thumbnail_%28ReactJS%29.png?1632230197" className="img" alt="true" />
                    </div>
                </div>
             
                </div>
        </div>
  )
}

export default AboutContent