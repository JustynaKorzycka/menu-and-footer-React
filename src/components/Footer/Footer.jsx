import React from 'react'
import { Company } from '../Company/Company'
import { FooterLinks } from '../FooterLinks/FooterLinks'
import './Footer.css'

export const Footer = ({ footerData }) => {
  
  return (
    <footer className='site-footer'>
      {(footerData["company"] || footerData["socials"]) &&
        <Company company={footerData["company"]} socials={footerData["socials"]}/>
      }
      {footerData["links"] &&
      <FooterLinks links={footerData["links"]} />
      }
    </footer>
  )
}