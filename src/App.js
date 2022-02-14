import React from 'react'

import Particles from 'react-tsparticles'

import Header from './components/Header'
import CallToAction from './components/CallToAction'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'

const particles = {
  fpsLimit: 60,
  interactivity: {
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: '#eee',
    },
    links: {
      color: '#aaa',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 50,
    },
    opacity: {
      value: 0.5,
    },
    shape: {
      type: 'circle',
    },
    size: {
      random: true,
      value: 3,
    },
  },
  detectRetina: true,
}

function App() {
  function navigate(e, id) {
    e && e.preventDefault()
    const elementToView = document.getElementById(id)
    elementToView.scrollIntoView()
  }

  return (
    <div>
      <Particles options={particles} />
      <div className='container mx-auto py-4 lg:px-32 xl:px-48'>
        <header>
          <Header navigate={navigate} />
        </header>
        <main>
          <CallToAction navigate={navigate} />
          <AboutMe />
          <Projects />
          <Contact />
          <div className='pt-24'></div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default App
