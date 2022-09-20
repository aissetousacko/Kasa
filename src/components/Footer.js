import React from 'react'
import logoWhite from '../assets/logo-white.png'

const Footer = () => {
  return (
    <div className="footer">
      <img src={logoWhite} alt="Logo" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </div>
  )
}

export default Footer
