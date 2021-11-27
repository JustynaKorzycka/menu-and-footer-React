import React from 'react'
import './FooterLink.css'

export const FooterLink = ({ name, link }) => {
  return (
    <div className="link">
      <a href={link} >{name}</a>
    </div>
  )
}