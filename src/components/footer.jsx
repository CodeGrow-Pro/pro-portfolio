import React from 'react'
import './footer.css'
import { FaFacebook, FaFacebookF, FaHome ,FaLinkedin,FaMailBulk,FaPhone, FaTwitter, FaYoutube} from "react-icons/fa";
const Footer = () => {
  return (
    <div className='footer'>
          <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                        <p>123 Housing Society , Bangladesh</p>
                    </div>
                </div>
                <div className='phone'>
                    <h4>
                    <FaPhone size={20} style={{color:"white",marginRight:"2rem"}}/>
                      1-2323-123-23
                    </h4>
                </div>
                <div className='mail'>
                    <h4>
                    <FaMailBulk size={20} style={{color:"white",marginRight:"2rem"}}/>
                      contact@example.com
                    </h4>
                </div>
            </div>

            <div className='right'>
                <h4>About The Company</h4>
                <p>This is me Fahimul kabir . CEO & Founder of Tech_DO . T enjoy discussing
                    new Projects and design challenges
                </p>
                <div className='social'>
                <FaFacebook size={30} style={{color:"white",marginRight:"2rem"}}/>
                <FaTwitter size={30} style={{color:"white",marginRight:"2rem"}}/>

                <FaLinkedin size={30} style={{color:"white",marginRight:"2rem"}}/>
                <FaYoutube size={30} style={{color:"white",marginRight:"2rem"}}/>

                </div>
            </div>
          </div>
    </div>
  )
}

export default Footer