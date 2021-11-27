import React from 'react'
import { MenuItem } from '../MenuItem/MenuItem'
import './Menu.css'
import { FaHamburger } from "react-icons/fa";

export const Menu = ({ menu }) => {
  
  function handleClick(e) {
    e.preventDefault();
    let mainNav = document.querySelector('#ul-list');
    let navBarToggle = document.getElementById('js-navbar-toggle');
    navBarToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    })
  }

  return (
    <nav id='main-nav'>
      <span className='navbar-toggle' id='js-navbar-toggle'><FaHamburger/></span>
      <ul id='ul-list'>
        {menu.map(item => <MenuItem element={item} key={item.name }/>)}
      </ul>
      
    </nav>
   
   
  )
}
