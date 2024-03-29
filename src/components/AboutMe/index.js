import React from 'react'

import './styles.scss'

import resume from '../../assets/Filipe Marques Resume.pdf'

function AboutMe() {
  return (
    <section id='about-me' className='pt-24'>
      <article className='about-me'>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>About Me</code>
        </h2>
        <div className='elevator-pitch'>
          <p>
            I'm a Software Engineer and passionate about creating high-quality
            software to deliver powerful results and change.
          </p>
          <p>
            With over seven years of experience in customer service and
            management, I've gained skills in relationship building,
            collaboration, and business development. I've always thrived on
            bringing customers the best experience to make sure my actions have
            had a positive impact in their lives and achieve the best results
            for the company, which combined with my passion for Software
            Engineering makes me an immediate asset.
          </p>
          <p>
            I'm hoping to bring my experience into a mission-driven organization
            that can foster my growth in the tech space.
          </p>
        </div>
        <a href={resume} target=' _blank' className='text-[#E6B029] resume'>
          RESUME
        </a>
      </article>
    </section>
  )
}

export default AboutMe
