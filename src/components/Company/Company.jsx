import React from 'react'
import './Company.css';
import { FaPhone } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { Social } from './Social/Social';




export const Company = ({ company, socials }) => {
  

  const addSocials = () => {
    const socialArr =[]
    for (const key in socials) {
      socialArr.push([key, socials[key]]);
    }
    return socialArr;
  }
  
  return(
    <div className="left-side">
      {company &&
        <div className="company-detail">
          <h5>{company.name}</h5>
          <img src={company.logo} alt="logo" className='company-logo' />
          <p className='address'>{company.addressLine1}</p>
          <p className='address'>{company.addressLine2}</p>
       </div>
      }
      <div className="contact-section">
        {company &&
          <div className="detail">
          <h5>Contact</h5>
          <div><FaPhone />{company.phone}</div>
          <div><FaTelegramPlane />{ company.mail}</div>
          </div>
        }
        {socials &&
          <div className="social-section">
          <h5>Socials</h5>
          <div className='soc-detail'>
              {addSocials().map(item => <Social name={item[0]} link={item[1]} key={item[0]} />)}
          </div>
         
          </div>
          
        }
      </div>
     
    </div>
  )
}
