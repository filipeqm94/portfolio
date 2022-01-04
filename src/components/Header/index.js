import React from 'react'

import Navbar from '../Navbar'

import './styles.scss'

function Header() {
  return (
    <div className='header-container'>
      <a href='/'>
        <h1 className='text-3xl font-bold logo'>
          FM<span className='text-[#E6B029]'>.</span>
        </h1>
      </a>
      <Navbar />
    </div>
  )
}

export default Header
