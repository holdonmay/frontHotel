import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <section className='footer-top'>
        <p className='footer-heading'>
          Enjoy the best vacations of your life
        </p>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>About Us</h2>
            <Link to='/'>Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer