import React from 'react'
import '../Styles/Contact.css'
const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <form>
          <input type='text' placeholder='Enter your fullname' />
          <input type='email' placeholder='Enter your email' />
          <textarea placeholder='Enter your message' row='5' ></textarea>
          <button type='submit' > send message </button>
        </form>
      </div>
    </div>
  )
}

export default Contact