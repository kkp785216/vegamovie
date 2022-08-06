import React from 'react'
import '../styles/Footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
        <span className='footer__copyright'>Copyright &copy; {new Date().getFullYear()}. Created by ❤️ Krishna Prajapati ❤️</span>

    </footer>
  )
}

export default Footer