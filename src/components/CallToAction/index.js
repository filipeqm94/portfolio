import React from 'react'

import './styles.scss'
import ctaImage from '../../images/ctaImage.png'

function CallToAction() {
  return (
    <section className='cta mt-24'>
      <div className='grid content-between h-100 cta-info'>
        <div>
          <h1 className='text-2xl font-bold cta-name mb-5'>Filipe Marques</h1>
          <code className='text-lg font-bold block'>
            &lt;Software Engineer /&gt;
          </code>
        </div>
        <a
          href='mailto: marques.fq@gmail.com'
          className='cta-contact w-36 font-bold text-center'
        >
          CONTACT ME
        </a>
      </div>
      <div className='cta-image'>
        <img src={ctaImage} alt='Filipe Marques' />
      </div>
      <div className='self-brand'>
        <h3 className='text-[#e6b029] text-xl text-right'>
          <code>Introduction</code>
        </h3>
        <p>
          Ever since my first "
          <code>
            <em>hello world</em>
          </code>
          " displayed to the console I knew I was hooked into the world of
          programming. What started with a simple line of code of a high school
          student, has become a full-fledged passion that only gets more
          exciting as years go by.
        </p>
      </div>
    </section>
  )
}

export default CallToAction
