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

import './styles.scss'
import articlrImg from './images/articlr.png'
import chatterImg from './images/chatter.png'
import recipeFinderImg from './images/recipe finder.png'

const projects = [
  {
    title: 'Chatter',
    image: chatterImg,
    description:
      'A real time chat app for users to connect to each other and learn new languages through conversation. Made using React and Django',
    technologies: ['react', 'django', 'javascript', 'python'],
    liveProject: 'https://project-4-react.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/client-project-4',
  },
  {
    title: 'articlr',
    image: articlrImg,
    description:
      'A website where users can post their own or read articles posted by other users. Made using MongoDB, Express, React and Node.',
    technologies: ['mongodb', 'express', 'react', 'node', 'javascript'],
    liveProject: 'https://tr-blog-website.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/Blog-Website',
  },
  {
    title: 'Recipe Finder',
    image: recipeFinderImg,
    description:
      'A website that displays recipes based on query parameters entered by the user. Made using React.',
    technologies: ['javascript', 'react'],
    liveProject: 'https://fm-recipe-finder.herokuapp.com/',
    sourceCode: 'https://github.com/filipeqm94/Recipe-Search',
  },
  {
    title: 'Crossword Puzzle',
    description:
      'A website for users to play the Crossword Puzzle game. Make with VanillaJS, HTML and SASS.',
    technologies: ['html', 'css', 'javascript'],
    liveProject: 'https://filipeqm94.github.io/Crossword-Puzzle/',
    sourceCode: 'https://github.com/filipeqm94/Crossword-Puzzle',
  },
  {
    title: 'Markdown Previewer',
    description:
      'An app designed to show compiled markdown language. Created using React and SASS.',
    technologies: ['html', 'css', 'javascript', 'react'],
    liveProject: 'https://filipeqm94.github.io/markdown-previewer/',
    sourceCode: 'https://github.com/filipeqm94/markdown-previewer',
  },
  {
    title: 'Documentation Page',
    description:
      'A JavaScript documentation website, mobile compatible with a custom made hambumger menu. Created with Vanilla JS, HTML and SASS.',
    technologies: ['html', 'css', 'javascript'],
    liveProject: 'https://filipeqm94.github.io/tech-doc-page/',
    sourceCode: 'https://github.com/filipeqm94/tech-doc-page',
  },
  {
    title: 'Survey Form',
    description:
      'A form website created to display mastery on HTML form creation. Styled with Bootstrap.',
    technologies: ['html', 'css'],
    liveProject: 'https://filipeqm94.github.io/avenger-experience-form/',
    sourceCode: 'https://github.com/filipeqm94/avenger-experience-form',
  },
  {
    title: 'Product Landing Page',
    description:
      'A website created to display mastery on HTML webpage creation. Styled with SASS and Bootstrap.',
    technologies: ['html', 'css'],
    liveProject: 'https://filipeqm94.github.io/product-landing-page/',
    sourceCode: 'https://github.com/filipeqm94/product-landing-page',
  },
  {
    title: 'Tribute Page',
    description:
      'A website created to display mastery on HTML webpage creation. Created with HTML and CSS.',
    technologies: ['html', 'css'],
    liveProject: 'https://filipeqm94.github.io/chester-tribute-page/',
    sourceCode: 'https://github.com/filipeqm94/chester-tribute-page',
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
      <article className='projects-article'>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>Projects</code>
        </h2>
        <div>
          <div className='flex align-center justify-center flex-wrap'>
            {technologies.map(tech => (
              <div
                className={`m-3 text-4xl cursor-pointer ${
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
        <div className='flex flex-wrap justify-center align-center projects-container'>
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
