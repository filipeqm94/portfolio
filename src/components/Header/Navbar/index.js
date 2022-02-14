import React, { useState } from 'react'

import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'

import './styles.scss'

function Navbar({ navigate }) {
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
          <li className='cursor-pointer' onClick={e => navigate(e, 'about-me')}>
            ABOUT ME
          </li>
          <li className='cursor-pointer' onClick={e => navigate(e, 'projects')}>
            PROJECTS
          </li>
          <li className='cursor-pointer' onClick={e => navigate(e, 'contact')}>
            CONTACT
          </li>
        </ul>
        <div className='break'></div>
        <ul className='flex items-center social text-2xl'>
          <li>
            <a
              href='https://www.linkedin.com/in/marques-fq/'
              target=' _blank'
              rel='noreferrer'
            >
              <AiFillLinkedin />
            </a>
          </li>
          <li>
            <a
              href='https://github.com/filipeqm94'
              target=' _blank'
              rel='noreferrer'
            >
              <AiFillGithub />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
