import React from 'react'

// import languageExchange from "../../images/languageExchange.png"
import blogWebsite from "../../images/blogWebsite.png"
import recipeFinder from "../../images/recipeFinder.png"

const projects = [
  {
    title: 'Language Exchange App',
    image: '',
    description:
      'A real time chat app for users to connect to each other and learn new languages through conversation.',
    technologies: ['react', 'django', 'javascript', 'python'],
    liveProject: 'https://project-4-react.herokuapp.com/',
    sourceCode: '',
  },
  {
    title: 'Blog Website',
    image: blogWebsite,
    description:
      'A website where users can post their own or read articles posted by other users',
    technologies: ['mongoose', 'express', 'react', 'node', 'javascript'],
    liveProject: '',
    sourceCode: '',
  },
  {
    title: 'Recipe Finder',
    image: recipeFinder,
    description:
      'A website that displays recipes based on query parameters entered by the user.',
    technologies: ['javascript', 'react'],
    liveProject: 'https://fm-recipe-finder.herokuapp.com/',
    sourceCode: '',
  },
]

function Projects() {
  return (
    <section id='projects' className='pt-24'>
      <article>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>Projects</code>
        </h2>
        <div>
          {projects.map(project => {
            return (
              <div>
                <img src={project.image} alt={project.title} />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.liveProject} target=' _blank'>
                  Live Project
                </a>
                <a href={project.sourceCode} target=' _blank'>
                  Source Code
                </a>
              </div>
            )
          })}
        </div>
      </article>
    </section>
  )
}

export default Projects
