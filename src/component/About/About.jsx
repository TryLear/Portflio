import React from 'react'
import './About.css'
import theme_pattern from '../../assest/theme_pattern.svg'
import User_img from '../../assest/about_profile.svg'

function About() {
  return (
    <div id='about' className='about'>
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src={User_img} alt="" />
        </div>
        <div className="about-right">
          <div className="about-para">
            <p>I am Fronted Developer and Cloud Developer with over i have knowlege in java</p>
            <p>My Passion is Software Developer and Create a unique Bussines using technolgy</p>
          </div>
          <div className="about-skills">
            <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:'60%'}} /></div>
            <div className="about-skill"><p>JavaScript</p> <hr style={{width:'60%'}} /></div>
            <div className="about-skill"><p>React Js</p> <hr style={{width:'80%'}} /></div>
            <div className="about-skill"><p>Java </p> <hr style={{width:'70%'}} /></div>
            <div className="about-skill"><p>Google Cloud & AWS</p> <hr style={{width:'60%'}} /></div>

          </div>
          <div className="about-acheivements">
          <div className="about-acheive">
            <h1>1+</h1>
            <p>YEARS OF EXPERIENCE</p>
          </div>
          <hr />
          <div className="about-acheive">
            <h1>9+</h1>
            <p>PROJECT COMPLETED</p>
          </div>
        </div>
        </div>
       

      </div>
    </div>
  )
}

export default About