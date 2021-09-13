import React, { useState } from 'react'
import emailjs from 'emailjs-com';
import './Contact.css'

const Result =() =>{
  return(
    <p>Su mensaje ha sido enviado satisfactoriamente. Pronto te contactaremos.</p>
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
  }, 6000)

  return (
    <div id='contact'>
      <form action="" onSubmit={sendEmail} >
        <div className="formWord">
          <h2>Contacto</h2>
          <span>Nombre Completo</span>
          <br />
          <input className="input100" type="text" name="fullName" required />
          <br />
          <span>Número De Contacto</span>
          <br />
          <input className="input100" type="text" name="phone" required />
          <br />
          <span>Email</span>
          <br />
          <input className="input100" type="text" name="email" required />
          <br />
        </div>
        <div className="formMessage">
          <span>Mensaje</span>
          <br />
          {/* is a bigger input */}
          <textarea name="message" required></textarea>
          <br />
          <button>Enviar</button>
          <div className="row">{result ? <Result/>: null}</div>
        </div>
      </form>
    </div>
  )
}

export default Contact