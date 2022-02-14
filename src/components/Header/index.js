import React from 'react'

import Navbar from '../Navbar'

import './styles.scss'

function Header({ navigate }) {
  return (
    <div className='header-container py-8 px-3 md:px-20'>
      <h1
        className='text-3xl font-bold logo cursor-pointer'
        onClick={e => navigate(e, 'top')}
      >
        FM<span className='text-[#E6B029]'>.</span>
      </h1>

      <Navbar navigate={navigate} />
    </div>
  )
}

export default Header
