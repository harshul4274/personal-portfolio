import React, { useRef } from 'react'
import './contact.css'
import Facebook from '../../assets/facebook-icon.png'
import Twitter from '../../assets/twitter.png'
import GitHub from '../../assets/github-logo.png'
import Instgram from '../../assets/instagram.png'
import Linkedin from '../../assets/linkedin.png'
import emailjs from "emailjs-com"

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ho182qq', 'template_untnq0z', form.current, 'WOKRpq9shzGFIVz2b')
            .then(
                (result) => {
                    console.log('SUCCESS!', result.status, result.text);
                    e.target.reset();
                    alert('Email Sent !');
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
                <span className='contactDesc'>Please fill out the form below to discuss any opportunities.</span>
                <form className='contactForm' ref={form} onSubmit={sendEmail}>
                    <input type='text' className='name' placeholder='Your Name' name='from_name' required />
                    <input type='email' className='email' placeholder='Your Email' name='from_email' required />
                    <textarea className='msg' name='message' rows='5' placeholder='Your Message'></textarea>
                    <button type='submit' value='Send' className='submitBtn'>Submit</button>

                    <div className='links'>
                        <a href='https://www.linkedin.com/in/harshul-vachheta'><img className='link' id='linkedin' src={Linkedin} alt='LinkedIn' /></a>
                        <a href='https://www.facebook.com/harshul.vachheta'><img className='link' id='facebook' src={Facebook} alt='Facebook' /></a>
                        <a href='https://twitter.com/HarshulVachheta'><img className='link' id='twitter' src={Twitter} alt='Twitter' /></a>
                        <a href='https://github.com/harshul4274'><img className='link' id='github' src={GitHub} alt='GitHub' /></a>
                        <a href='https://www.instagram.com/itsmeharshul'><img className='link' id='instagram' src={Instgram} alt='Instagram' /></a>
                    </div>
                </form>
            </div>
        </section>
    );
}


export default Contact;