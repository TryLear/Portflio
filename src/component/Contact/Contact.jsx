import React from 'react'
import './Contact.css'
import theme_pattren from '../../assest/theme_pattern.svg'
import mail_icon from '../../assest/mail_icon.svg'
import location_icon from '../../assest/location_icon.svg'
import call_icon from '../../assest/call_icon.svg'

function Contact() {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "93e234b4-22eb-4567-ac73-3d46c3bf6fcd");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };

  
      <form onSubmit={onSubmit}>
        <input type="text" name="name"/>
        <input type="email" name="email"/>
        <textarea name="message"></textarea>
        <button type="submit">Submit Form</button>
      </form>

  return (
    <div id='contact' className='contact'>
        <div className="contact-title">
          <h1>Get in touch</h1>
          <img src={theme_pattren} alt="" />
        </div>
        <div className="contact-section">
          <div className="contact-left">
            <h1>Let's Talk</h1>
            <p>I am currently avaliable to take on new project you need a fronted developer so you caontact me here anytime</p>
            <div className="contact-details">
              <div className="contact-deatil">
                <img src={mail_icon} alt="" />
                <p>aadilahmad9065@gmail.com</p>

              </div>
              <div className="contact-deatil">
                <img src={call_icon} alt="" />
                <p>+919065811999</p>

              </div>
              <div className="contact-deatil">
                <img src={location_icon} alt="" />
                <p>Delhi India</p>
              </div>
            </div>
          </div>
          <form onSubmit={onSubmit}  className="contact-rigth">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='Enter your name' name='name' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='Enter your email' name='email' />
            <label htmlFor="">Write Your Message</label>
            <textarea name="message"   rows="8" placeholder='Enter your message'></textarea>
            <button type='submit' className='conatct-button'> Submit Now</button>
          </form>
        </div>

    </div>
  )
}

export default Contact