
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {FaTwitter} from 'react-icons/fa'
import {IoLogoWhatsapp} from 'react-icons/io'
import {useRef} from 'react';
import emailjs from 'emailjs-com'

const contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5mswf59', 'template_aazbh8y', form.current, 'cwkTGeq1tulRsKMGP')
      
    e.target.reset()
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>4thilagunathilaka@gmail.com</h5>
            <a href='mailto:4thilagunathilaka@gmail.com' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <FaTwitter className='contact__option-icon'/>
            <h4>Twitter</h4>
            <h5>ThilaSG_K</h5>
            <a href='https://twitter.com/ThilaSG_K' target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <IoLogoWhatsapp className='contact__option-icon'/>
            <h4>Whatsapp</h4>
            <h5>+94 76 992 5717</h5>
            <a href='https://api.whatsapp.com/send?phone=+94769925717' target='_blank'>Send a message</a>
          </article>
        </div>
        {/* End contact option */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name='message' rows='7' placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default contact
