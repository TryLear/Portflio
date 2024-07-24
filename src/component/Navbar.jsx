import React, { useRef, useState } from 'react'
import './Navbar.css'
import logo from '../assest/logo.svg'
import under_line from '../assest/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import menu_open from '../assest/menu_open.svg'
import menu_close from '../assest/menu_close.svg'

function Navbar() {
  const [menu,setMenu]=useState('home')
 const menuRef=useRef()
 const openMenu=()=>{
  menuRef.current.style.right='0'
 }
 const closeMenu=()=>{
  menuRef.current.style.right='-350px'
 }
  return (
    <div className='navbar'>
      <img src={logo} alt="" />
      <img src={menu_open} onClick={openMenu} alt="" className="nav-open" />
      <ul ref={menuRef} className="nav-menu">
        <img src={menu_close} onClick={closeMenu} alt="" className="nav-close" />
        <li><AnchorLink className='anchor-link'  href='#home'><p onClick={()=>setMenu('home')}>Home</p></AnchorLink>{menu==='home'? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu('about')}>About Me</p></AnchorLink>{menu==='about'? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu('services')}>Services</p></AnchorLink>{menu==='services'? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu('portfolio')}>Work</p></AnchorLink>{menu==='portfolio'? <img src={under_line} alt="" />:<></> }</li>
        <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu('contact')}>Contact</p></AnchorLink>{menu==='contact'? <img src={under_line} alt="" />:<></> }</li>
      </ul>
      <div className="nav-connect"> <AnchorLink className='anchor-link' offset={50} href='#contact'> Connect with Me</AnchorLink></div>

    </div>
  )
}

export default Navbar