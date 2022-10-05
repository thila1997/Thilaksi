import React from 'react'
import './about.css'
import ME from '../../assets/about.JPG'
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
              <h5>Experience</h5>
              <small>4+ Years Working</small>
            </article>
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Clients</h5>
              <small>200+ World Wide</small>
            </article>
            <article className='about__card'>
              <BsFolder2Open className='about__icon'/>
              <h5>Projects</h5>
              <small>8+ completed projects</small>
            </article>
          </div>

        </div>

      </div>
    </section>
  )
}

export default about