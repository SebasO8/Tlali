import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'

const Result =() =>{
  return(
    <p>Your message has been successfully sent. i will contact you soon.</p>
  )
}

function Contact() {
  const [result, showResult] = useState(false)

  const sendEmail =(e) => {
    e.preventDefault();

    emailjs.sendForm('service_o2thf2i', 'template_zsnju7q', e.target,'user_Ybm8UI17ePxVIS99TJHj9')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true)
  };

  setTimeout(() => {
    showResult(false);
  }, 4000)

  return (
    <form action="" onSubmit={sendEmail} id='contact'>
      <div className="formWord">
        <h2>Say Hello!</h2>
        <span>Full Name</span>
        <br />
        <input className="input100" type="text" name="fullName" required />
        <br />
        <span>Phone Number</span>
        <br />
        <input className="input100" type="text" name="phone" required />
        <br />
        <span>Enter Email</span>
        <br />
        <input className="input100" type="text" name="email" required />
        <br />
      </div>
      <div className="formWord">
        <span>Message</span>
        <br />
        <textarea name="message" required></textarea>
        <br />
        <button>SUBMIT</button>
        <div className="row">{result ? <Result/>: null}</div>
      </div>
    </form>
  )
}

export default Contact