import { useState } from 'react'
import { init, send } from 'emailjs-com'

import './styles.scss'

init(process.env.REACT_APP_USER_ID)

function Contact() {
  const [toSend, setToSend] = useState({
    from_name: '',
    message: '',
    reply_to: '',
  })

  function handleSubmit(e) {
    e.preventDefault()
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID,
    )
      .then(res => {
        console.log('Success!', res.status, res.text)
      })
      .catch(err => {
        console.log('Failed.', err)
      })
  }

  function handleChange({ target }) {
    setToSend(prevState => ({
      ...prevState,
      [target.name]: [target.value],
    }))
  }

  return (
    <section id='contact' className='pt-24'>
      <article className='px-1'>
        <h2 className='text-[#E6B029] text-xl ml-5 mb-2'>
          <code>Contact Me</code>
        </h2>
        <p className='text-center mb-2 text-xl w-full lg:w-2/3 lg:mx-auto'>
          <span className='text-yellow-300'>
            Interested in working together?
          </span>{' '}
          I'm currently located in Boston, MA and open to both relocation and
          remote work. Leave a message with details so we can discuss.
        </p>
        <p className='text-center mb-2 text-xl w-full lg:w-2/3 lg:mx-auto'>
          <span className='text-yellow-300'>Have something else in mind?</span>{' '}
          I'm always open to networking! Say hi and maybe let's get some coffee.
          It's on me!
        </p>
        <p className='text-center font-bold text-[#E6B029] mb-10 text-xl w-full lg:w-2/3 lg:mx-auto'>
          Thanks for stopping by!
        </p>
        <form
          onSubmit={handleSubmit}
          className='bg-zinc-800 px-2 md:px-4 py-3 rounded w-full lg:w-2/3 mx-auto'
        >
          <div className='md:flex justify-around'>
            <label className='block my-3'>
              Your Name:
              <input
                type='text'
                name='from_name'
                placeholder='Your preferred name'
                required
                value={toSend.from_name}
                onChange={handleChange}
                className='block w-full md:w-72 lg:w-56 xl:w-72 px-2 py-1 rounded bg-[#888] mt-2'
              />
            </label>
            <label className='block my-3 my-3'>
              Your Email:
              <input
                type='email'
                name='reply_to'
                placeholder='email@example.com'
                required
                value={toSend.reply_to}
                onChange={handleChange}
                className='block w-full md:w-72 lg:w-56 xl:w-72 px-2 py-1 rounded bg-[#888] mt-2'
              />
            </label>
          </div>
          <label className='block my-3'>
            Your Message:
            <textarea
              name='message'
              placeholder='Hello there...'
              required
              value={toSend.message}
              onChange={handleChange}
              className='block w-full h-48 px-2 py-1 rounded bg-[#888] resize-none'
            />
          </label>
          <button
            type='submit'
            className='block mx-auto p-2 border-2 border-[#E6B029] rounded text-[#E6B029] hover:bg-[#E6B029] hover:text-[#333]'
          >
            Submit
          </button>
        </form>
      </article>
    </section>
  )
}

export default Contact
