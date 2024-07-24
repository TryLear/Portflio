import React from 'react'
import './Hero.css'
import Profile_icon from '../../assest/profile_img.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Hero() {
  return (
    <div id='home' className='hero'>
        <img src={Profile_icon} alt="" />
        <h1> <span>I am Aadil Ahmad</span>, i am fronted Developer</h1>
        <p>I am fronted developer from India with 1 years of Exprience</p>
        <div className="hero-action">
          <div className="hero-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me </AnchorLink></div>
          <div className="hero-resume">My resume</div>

        </div>
    </div>
  )
}

export default Hero