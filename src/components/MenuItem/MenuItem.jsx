import React from 'react'
import './MenuItem.css'

export const MenuItem = ({ element }) => {

  
  return (
    <li className='menu-link'>
      <a href={element.link}>{element.name}</a></li>
  )
}