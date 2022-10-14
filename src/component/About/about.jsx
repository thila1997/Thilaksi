import React from 'react'
import './about.css'
import ME from '../../assets/about_image.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {BsFolder2Open} from 'react-icons/bs'

const about = () => {
  return (
    <section id='about'>
      <h5>Want to know?</h5>
      <h2>About Me</h2>

      <div className='container about__container'>
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>Languages</h5>
              <small>5+ programming Languages</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Soft Skills</h5>
              <small>Team work,Leadership,<br/>Creativity,Communication,<br/>Problem solving</small>
            </article>
            <article className='about__card'>
              <BsFolder2Open className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ completed projects</small>
            </article>
          </div>
          <p>
          I am a social girl with strong interpersonal skills who can motivate fellow team mates and work together 
towards objectives with passion and dedication. And currently an undergraduate student, pursuing a Bachelor of Computer Science and Technology.
I am a passionate with UI/UX .<br/>I love photography so much and editing photos and videos is my hobby. and also I am a creative writer who loves to write for your thoughts. I have interest in Artificial Neutral Networks and molecular biology.
Now a days, I am a self-studier in Front end development, Web development, Human recourse management and networking.
          </p>
          <a href="#contact" className='btn btn-primary'>Let's Talk More</a>

        </div>

      </div>
    </section>
  )
}

export default about