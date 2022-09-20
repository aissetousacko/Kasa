import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="Logo de Kasa" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A propos</li>
        </NavLink>
      </ul>
    </div>
  )
}

export default Header
