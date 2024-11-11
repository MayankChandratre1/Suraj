import emailjs from '@emailjs/browser'
import React, { useRef } from 'react'
import './Join.css'
const Join = () => {
    const form = useRef()
    const [error, setError] = React.useState(null);

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_v504s4y', 'template_ng2lwdb', form.current, {
            publicKey: 'p85gj4CVjYeFxRT1k',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        };

  return (
    <div className="join" id="join-us">
        <div className="left-j">
            <hr />
            <div>
                <span className="shape-text">READY TO</span>
                <span>LEVEL UP</span>
            </div>
            <div>
                <span className="shape-text">YOUR BODY</span>
                <span>WITH US?</span>
            </div>
        </div>
        <div className="right-j"></div>
            <form ref={form} className="email-container" onSubmit={sendEmail}>
                {error && <p className='error-msg'>{error}</p>}
                <input type="email" name="user_email" placeholder="Enter your Email Address" />
                <button className="btn btn-j">Join Now</button>

            </form>
    </div>
  )
}

export default Join;
