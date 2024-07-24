import React from 'react'
import './Footer.css'
import footer_logo from '../../assest/footer_logo.svg'
import user_icon from '../../assest/user_icon.svg'
function Footer() {
  return (
    <div className='footer'>
        <div className="footer-top">
            <div className="top-left">
                <img src={footer_logo} alt="" />
                <p>I am Fronted Developer with 1 years exprience and i am passenate about new technolgy learn and grow bussiness</p>
            </div>
            <div className="top-right">
                <div className="email-input">
                    <img src={user_icon} alt="" />
                    <input type="email" placeholder='Enter your email' />
                </div>
                
                <div className="footer-subscribe">Subscribe</div>
            </div>
            </div>
            <hr />
            
            
            <div className="footer-bottom">
                
                    <p className='bottom-left'>@ 2023 Aadil Ahmad, All rights reserved</p>
        
                <div className="bottom-right">
                    <p>Term of Services</p>
                    <p>Privacy Policy</p>
                    <p>Connect with me</p>
                </div>
            </div>
       

    </div>
  )
}

export default Footer