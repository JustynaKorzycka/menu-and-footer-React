import React from 'react'
import './Social.css'
import { FaFacebookF, FaInstagram, FaTwitter   } from "react-icons/fa";

export const Social = ({ name, link }) => {
  return (
    <div className="social">
      <a href={link} rel="noopener noreferrer" className='social-icon'> 
       {name === 'fb' && <FaFacebookF /> }
       {name === 'instagram' && <FaInstagram /> }
       {name === 'twitter' && <FaTwitter /> }
      </a>
    </div>
  )
}