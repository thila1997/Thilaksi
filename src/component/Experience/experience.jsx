import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'
import {FaHtml5} from 'react-icons/fa'
import {SiReact} from 'react-icons/si'
import {IoLogoCss3} from 'react-icons/io'
import {IoLogoJavascript} from 'react-icons/io'
import {FaBootstrap} from 'react-icons/fa'
import {FaAngular} from 'react-icons/fa'
import {SiPhp} from 'react-icons/si'
import {FaNodeJs} from 'react-icons/fa'
import {FaPython} from 'react-icons/fa'
import {SiSpringboot} from 'react-icons/si'
import {GrMysql} from 'react-icons/gr'
import {SiMongodb} from 'react-icons/si'
import {FaJava} from 'react-icons/fa'
import {DiPhotoshop} from 'react-icons/di'
import {FiFigma} from 'react-icons/fi'

const experience = () => {
  return (
    <section id='experience'>
      <h5>The skills I have!</h5>
      <h2>My Experience</h2>

     <div className="container experience__container">
      {/*Front end */}
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
        <article className='experience__details'>
            <div>
              <h4><SiReact className='experience__detail-icon'/> React</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4> <FaHtml5 className='experience__detail-icon'/> HTML</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4> <IoLogoCss3 className='experience__detail-icon'/> CSS</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4> <IoLogoJavascript className='experience__detail-icon'/> JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4>  <FaBootstrap className='experience__detail-icon'/> Bootstrap</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4>  <FaAngular className='experience__detail-icon'/> Angular</h4>
              <small className='text-light'>Following</small>
            </div>
          </article>
          
          
        </div>
      </div>
      {/*Back end */}
      <div className="experience__backend">
      <h3>Backend Development</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <div>
              <h4><SiPhp className='experience__detail-icon'/> PHP</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><FaPython className='experience__detail-icon'/> Python</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><FaNodeJs className='experience__detail-icon'/> Nodejs</h4>
              <small className='text-light'>Following</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><SiSpringboot className='experience__detail-icon'/> Springboot</h4>
              <small className='text-light'>Intermediate</small>
            </div>
          </article>
          
          <article className='experience__details'>
            <div>
              <h4><GrMysql className='experience__detail-icon'/> MySQL</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><SiMongodb className='experience__detail-icon'/> MongoDB</h4>
              <small className='text-light'>Following</small>
            </div>
          </article>
        </div>
      </div>
           {/*Other */}
           <div className="experience__other">
      <h3>Others</h3>
        <div className="experience__content">
          <article className='experience__details'>
            <div>
              <h4><FaJava className='experience__detail-icon'/> Java</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><BsPatchCheckFill className='experience__detail-icon'/> C</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><BsPatchCheckFill className='experience__detail-icon'/> C++</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><BsPatchCheckFill className='experience__detail-icon'/> C#</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          
          <article className='experience__details'>
            <div>
              <h4><DiPhotoshop className='experience__detail-icon'/> Photoshop </h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
          <article className='experience__details'>
            <div>
              <h4><FiFigma className='experience__detail-icon'/> Figma</h4>
              <small className='text-light'>Experienced</small>
            </div>
          </article>
        </div>
      </div>
     </div>
    </section>
  )
}

export default experience