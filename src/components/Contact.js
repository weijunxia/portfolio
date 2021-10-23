import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import '../styles/contact.css'

function Contact() {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
    e.target.reset()
  }
  return (
    <div className="contact_form_wrapper">
      <form
        ref={form}
        onSubmit={sendEmail}
        className="contact_form"
        id="contact"
      >
        <h1 className="contact_form_h1">Send a project request!</h1>
        <div className="name_and_email_container">
          <label className="contact_form_label">Name: &#160;</label>
          <input
            type="text"
            name="from_name"
            className="contact_form_name_input"
          />
          &#160;
          <label className="contact_form_label">Email:&#160; </label>
          <input
            type="email"
            name="user_email"
            className="contact_form_email_input"
          />
        </div>
        <label className="contact_form_label_text_area">
          Project Details:&#160;
        </label>
        <textarea name="message" className="contact_form_textarea" />
        <input type="submit" value="Submit" className="contact_form_submit" />
      </form>
    </div>
  )
}

export default Contact
