import React from 'react'
import './Header.css'
import logo from './logo.svg';
import { Menu } from '../Menu/Menu';

export const Header = ({menu}) => {
  return (
    <header className="site-header">
      <div className="header-content">
        <div className="logo">
    <img src={logo} alt="logo" />
        </div>
        <div className="site-menu">
          <Menu menu={menu} />
          
        </div>
      </div>

    </header>
    
  )
}