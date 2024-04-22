import { useState } from 'react'
import { init, send } from 'emailjs-com'

import './styles.scss'

const initialState = {
  from_name: '',
  message: '',
  reply_to: '',
}

init(process.env.REACT_APP_USER_ID)

function Contact() {
  const [toSend, setToSend] = useState(initialState)
  const [requestSent, setRequestSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setRequestSent(true)
    setLoading(true)
    send(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      toSend,
      process.env.REACT_APP_USER_ID,
    )
      .then(res => {
        setLoading(false)
        setToSend(initialState)
        console.log('Success!', res.status, res.text)
      })
      .catch(err => {
        setLoading(false)
        setError(true)
        console.log('Failed.', err)
      })
  }

  function handleChange({ target }) {
    setToSend(prevState => ({
      ...prevState,
      [target.name]: [target.value],
    }))
  }

  function handleClose() {
    setRequestSent(false)
    setError(false)
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
          I'm currently located in Massachusetts and open to relocation for the right opportunity. Leave a message with details so we can discuss.
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
          className='bg-zinc-800 px-2 md:px-4 py-3 rounded w-full lg:w-2/3 mx-auto relative'
        >
          <div
            className={`${requestSent
              ? 'absolute w-full h-full top-0 left-0 flex flex-col bg-[#99999975]'
              : 'hidden'
              }`}
          >
            {loading ? (
              <div className='m-auto'>
                <svg
                  role='status'
                  className='inline mr-2 w-8 h-8 text-[#E6B029] animate-spin fill-[#333]'
                  viewBox='0 0 100 101'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                    fill='currentColor'
                  />
                  <path
                    d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                    fill='currentFill'
                  />
                </svg>
              </div>
            ) : (
              <div className='bg-[#333] text-[#eee] rounded text-center m-auto w-full md:w-1/2 opacity-100'>
                {error ? (
                  <div className='relative p-5'>
                    <div
                      className='absolute top-0 right-1 underline text-[#E6B029] text-sm cursor-pointer'
                      onClick={handleClose}
                    >
                      Close
                    </div>
                    <p>Oh no! Something went wrong!</p>
                    <p>Please feel free to try again later or email me at</p>
                    <a
                      href='mailto:marques.fq@gmail.com'
                      className='underline text-[#E6B029]'
                    >
                      marques.fq@gmail.com
                    </a>
                  </div>
                ) : (
                  <div className='relative p-5'>
                    <div
                      className='absolute top-0 right-1 underline text-[#E6B029] text-sm cursor-pointer'
                      onClick={handleClose}
                    >
                      Close
                    </div>
                    <p>Message received!</p>
                    <p>I will get back to you within a day!</p>
                    <p>😁</p>
                  </div>
                )}
              </div>
            )}
          </div>
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
                className='block w-full md:w-72 lg:w-56 xl:w-64 px-2 py-1 rounded bg-[#888] mt-2'
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
                className='block w-full md:w-72 lg:w-56 xl:w-64 px-2 py-1 rounded bg-[#888] mt-2'
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
