import React from 'react'
import "./FooterLinks.css"
import { FooterLink } from '../FooterLink/FooterLink'

export const FooterLinks = ({ links }) => {

  const changeToArr = () => {
    const linksArr = [];
    for (const link in links) {
      linksArr.push([link, links[link]]);
    }
    return linksArr
  }

  changeToArr();
  return (
    <div className="links-sec">
      <h5>Links</h5>
      <div className="links">
        {changeToArr().map(item => <FooterLink name={item[0]} link={item[1]} key={item[0]} />)}
        </div>
    </div>
  )
}