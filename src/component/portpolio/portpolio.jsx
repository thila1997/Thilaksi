import React from 'react'
import './portpolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'

const portpolio = () => {
  return (
    <section id='portpolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG1} alt="" />
          </div>
          <h3>Plant Store for Miura Floriculture</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Online Clothing store for Frizty House</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>System for Janajaya Farmer’s Association</h3>
          <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>University Hostel management system</h3>
         <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          <a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a>
         </div>
        </article>
      </div>
    </section>
  )
}

export default portpolio

