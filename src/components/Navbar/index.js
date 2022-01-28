import React, { useState } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import './styles.scss'

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  return (
    <nav className='flex items-center'>
      <div
        className='text-2xl menu'
        onClick={() => setShowNavbar(prevState => !prevState)}
      >
        <GiHamburgerMenu />
      </div>
      <div className={`flex items-center navbar ${showNavbar ? 'show' : ''}`}>
        <ul className='flex links'>
          <li>
            <a href='#about-me'>ABOUT ME</a>
          </li>
          <li>
            <a href='#projects'>PROJECTS</a>
          </li>
          <li>
            <a href='mailto: marques.fq@gmail.com'>CONTACT</a>
          </li>
        </ul>
        <div className='break'></div>
        <ul className='flex items-center social text-2xl'>
          <li>
            <a href='https://www.linkedin.com/in/marques-fq/' target=' _blank'>
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a href='https://github.com/filipeqm94' target=' _blank'>
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
