import React, {useRef} from 'react';
import LinkedInImg from '../../assets/linkedin.png';
import "../Contact/contact.css";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_sybd6f1', 'template_wjmr20e', form.current, {
            publicKey: 'a8sm5q56RMyhud4f6',
          })
          .then(
            () => {
              console.log('SUCCESS!');
              e.target.reset()
              alert("Email Sent!")
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };
    return (
        <section id='contactPage'>
            <div id='contact'>
                <h1 className='contactPageTitle'>Contact Me</h1>
                <span className='contactDesc'>Please fill out the form below to contact me!</span>
                <form className='contactForm' ref = {form} onSubmit={sendEmail}>
                    <input type = 'text' className = 'name' placeholder='Your Name' name="from_name" />
                    <input type = 'text' className = 'email' placeholder='Your Email' name="from_email" />
                    <textarea className = "msg"name = "message" rows = "5" placeholder= "Your Message"></textarea>
                    <button type = "submit" value = "Send" className='submitBtn'>Submit</button>
                    <div className="links">
                        <a href = "https://www.linkedin.com/in/alicia-z-mao/"><img src={LinkedInImg} alt = "LinkedIn" className = "linkedIn"/></a>

                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;