import React, { useState } from 'react'
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiPython,
  SiDjango,
} from 'react-icons/si'
import Project from './Project'

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
    technologies: ['mongodb', 'express', 'react', 'node', 'javascript'],
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

const initialTechs = [
  {
    icon: <SiHtml5 />,
    name: 'html',
    active: false,
  },
  {
    icon: <SiCss3 />,
    name: 'css',
    active: false,
  },
  {
    icon: <SiJavascript />,
    name: 'javascript',
    active: false,
  },
  {
    icon: <SiReact />,
    name: 'react',
    active: false,
  },
  {
    icon: <SiMongodb />,
    name: 'mongodb',
    active: false,
  },
  {
    icon: <SiExpress />,
    name: 'express',
    active: false,
  },
  {
    icon: <SiNodedotjs />,
    name: 'node',
    active: false,
  },
  {
    icon: <SiPython />,
    name: 'python',
    active: false,
  },
  {
    icon: <SiDjango />,
    name: 'django',
    active: false,
  },
]

function Projects() {
  const [technologies, setTechnologies] = useState(initialTechs)
  const [filter, setFilter] = useState('')

  function handleSearch(tech) {
    const index = technologies.indexOf(tech)
    setTechnologies(prevTechs =>
      prevTechs.map((tech, techIndex) => {
        if (index === techIndex) {
          if (tech.active) {
            tech.active = false
            setFilter('')
          } else {
            tech.active = true
            setFilter(tech.name)
          }
        } else {
          tech.active = false
        }
        return tech
      }),
    )
  }

  return (
    <section id='projects' className='pt-24'>
      <article>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>Projects</code>
        </h2>
        <div>
          <div className='flex align-center justify-center'>
            {technologies.map(tech => (
              <div
                className={`mx-3 text-4xl cursor-pointer ${
                  tech.active ? 'text-[#E6B029]' : 'hover:text-yellow-300'
                }`}
                onClick={() => handleSearch(tech)}
                key={tech.name}
              >
                {tech.icon}
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-wrap justify-center align-center'>
          {projects
            .filter(project => {
              if (filter) {
                return project.technologies.includes(filter)
              } else {
                return project
              }
            })
            .map(project => (
              <Project project={project} key={project.title} />
            ))}
        </div>
      </article>
    </section>
  )
}

export default Projects
