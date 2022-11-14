import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/my.png'
import HeaderSocial from './headerSocials'

const header = () => {
  return (
   <header>
    <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Thilaksi S. Gunathilaka</h1>
      <h5 className="text-light"> UI/UX Designer,Frontend Developer and Software Engineer</h5>
      <CTA/>
      <HeaderSocial/>

      <div className="me">
        <img src={ME} alt="my" />
      </div>
      <a href="contact" className='scroll__down'>Scroll Down</a>
    </div>
   </header>
  )
}

export default header