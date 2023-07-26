import React from 'react'
import './footer.css'
import gpt3Logo from '../../assets/logo.svg'



const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
      <h1 className='gradient__text'>DO you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>

      <div className='gpt3__footer-links_logo'>
      <img src={gpt3Logo} alt="logo" />
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
      </div>

      <div className='gpt3__footer-links_div'>
        <h4>links</h4>
        <p>Over us</p>
        <p>Social Media</p>
        <p>Countres</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Company</h4>
        <p>Terms & Conditions</p>
        <p>Privcy Policy</p>
        <p>Contact</p>
      </div>
      <div className='gpt3__footer-links_div'>
        <h4>Get in touch</h4>
        <p>Vermeulenstraat 3, brussels 100</p>
        <p>003-4443948</p>
        <p>yupyup@yup</p>
      </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>&copy; Copyright 2023 Khalid All rights reserved</p>
      </div>
    </div>
  )
}

export default Footer
