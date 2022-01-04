import React from 'react'

import Particles from 'react-tsparticles'

import CallToAction from './components/CallToAction'
import Header from './components/Header'

const particles = {
  fpsLimit: 60,
  interactivity: {
    modes: {
      bubble: {
        distance: 100,
        duration: 2,
        opacity: 0.8,
        size: 40
      },
      push: {
        quantity: 4
      },
      repulse: {
        distance: 200,
        duration: 0.4
      }
    }
  },
  particles: {
    color: {
      value: '#ffffff'
    },
    links: {
      color: '#ffffff',
      distance: 100,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    collisions: {
      enable: true
    },
    move: {
      direction: 'none',
      enable: true,
      outMode: 'bounce',
      random: false,
      speed: 1,
      straight: false
    },
    number: {
      density: {
        enable: true
      },
      value: 25
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: 'circle'
    },
    size: {
      random: true,
      value: 3
    }
  },
  detectRetina: true
}

function App() {
  return (
    <div className='container mx-auto px-2'>
      <Particles options={particles} />
      <header>
        <Header />
      </header>
      <main>
        <CallToAction />
      </main>
    </div>
  )
}

export default App
