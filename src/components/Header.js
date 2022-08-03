import React from 'react'
import '../styles/Header.scss'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <Link to='/'><img src="/logo.png" alt="Logo" className="d-block header__logo" /></Link>
      <nav className='nav'>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/'>Bollywood Movies</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header