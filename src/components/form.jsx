import './form.css'
import React from 'react'

const Form = () => {
  return (
    <div className='form'>
        <form>
            <label>Your Name</label>
            <input type="text" placeholder='Enter your name here ...'/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email here ...'/>
            <label>Subject</label>
            <input type="text" placeholder='Enter your Subject here ...'/>
            <label>Message</label>
            <textarea rows="6" placeholder='Type your message here . . . . .'
            ></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form