import React from 'react'

import './styles.scss'

function Project({ project }) {
  const aTagClasses =
    'p-2 border-2 border-[#E6B029] rounded text-[#E6B029] hover:bg-[#E6B029] hover:text-[#333]'

  return (
    <div
      className='bg-zinc-800 mx-3 p-6 w-72 h-80 flex flex-col p-2 m-5 rounded'
      key={project.title}
    >
      <h3 className='mb-3'>{project.title}</h3>
      <p className='mb-auto'>{project.description}</p>
      <div className='flex justify-around links'>
        <a href={project.liveProject} target=' _blank' className={aTagClasses}>
          Live Project
        </a>
        <a href={project.sourceCode} target=' _blank' className={aTagClasses}>
          Source Code
        </a>
      </div>
    </div>
  )
}

export default Project
