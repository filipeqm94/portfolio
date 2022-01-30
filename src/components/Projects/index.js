import React from 'react'

const projects = [
  {
    title: 'Language Exchange App',
    description:
      'A real time chat app for users to connect to each other and learn new languages through conversation. Made using React and Django',
    technologies: ['react', 'django', 'javascript', 'python'],
    liveProject: 'https://project-4-react.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/client-project-4',
  },
  {
    title: 'Blog Website',
    description:
      'A website where users can post their own or read articles posted by other users. Made using MongoDB, Express, React and Node.',
    technologies: ['mongoose', 'express', 'react', 'node', 'javascript'],
    liveProject: 'https://tr-blog-website.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/Blog-Website',
  },
  {
    title: 'Recipe Finder',
    description:
      'A website that displays recipes based on query parameters entered by the user. Made using React.',
    technologies: ['javascript', 'react'],
    liveProject: 'https://fm-recipe-finder.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/Recipe-Search',
  },
]

function Projects() {
  const aTagClasses = "p-2 border-2 border-yellow-400 rounded text-yellow-400 hover:bg-yellow-400 hover:text-[#333]"

  return (
    <section id='projects' className='pt-24'>
      <article>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>Projects</code>
        </h2>
        <div className='flex flex-wrap justify-center align-center'>
          {projects.map(project => {
            return (
              <div className='bg-zinc-800 mx-3 w-64 h-64 flex flex-col p-2 m-5 rounded'>
                <h3 className='mb-3'>{project.title}</h3>
                <p>{project.description}</p>
                <div className='mt-auto mb-2 flex justify-around'>
                  <a href={project.liveProject} target=' _blank' className={aTagClasses}>
                    Live Project
                  </a>
                  <a href={project.sourceCode} target=' _blank' className={aTagClasses}>
                    Source Code
                  </a>
                </div>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Projects
