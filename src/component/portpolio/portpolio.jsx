import React from 'react'
import './portpolio.css'
import IMG1 from '../../assets/project1.png'
import IMG2 from '../../assets/project2.png'
import IMG3 from '../../assets/project3.png'
import IMG4 from '../../assets/project4.png'
import IMG5 from '../../assets/project5.png'
import IMG6 from '../../assets/project6.png'
import IMG7 from '../../assets/project7.png'

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
          <h6>A web-based system for buy and sell cactus plants.<br/>Technologies - React, Node.js, Express.js</h6>
          <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/Miura_Floriculture.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG2} alt="" />
          </div>
          <h3>Online Clothing store for Frizty House</h3>
          <h6>A web-based system for managing the online clothing process.<br/>Technologies - HTML, CSS, JavaScript, PHP, MySQL, Bootstrap</h6>
          <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/Frizty-Store.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG3} alt="" />
          </div>
          <h3>System for Janajaya Farmer’s Association</h3>
          <h6>A simple project with paddy management.<br/>Technologies - Java, MySQL</h6>
          <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/RAD-project---Paddy-managemnet-.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG4} alt="" />
          </div>
          <h3>University Hostel management system</h3>
          <h6>A web-based application for managing the hostel.<br/>Technologies - Figma, HTML, CSS, Bootstrap, Firebase, Laravel</h6>
         <div className="portfolio__item-cta">
          <a href='https://github.com' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG5} alt="" />
          </div>
          <h3>Database Management System for Sathya Weda Madura</h3>
          <h6>A web-based application for managing a channel center.<br/>Technologies - C#.NET, MySQL</h6>
         <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/ElectricityBillCalculator.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG6} alt="" />
          </div>
          <h3>Electricity Bill Calculator</h3>
          <h6>A simple project to calculate monthly fee.<br/>Technologies - Java Swing</h6>
         <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/ElectricityBillCalculator.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={IMG7} alt="" />
          </div>
          <h3>Book shop app</h3>
          <h6>A web application that can manage and categorize books in book shop.<br/>Technologies - Spring framework, Java , Spring data JPA (Hibernate),
Thymeleaf, MySQL, Spring web, Spring Boot DevTools</h6>
         <div className="portfolio__item-cta">
          <a href='https://github.com/thila1997/bookshopapp.git' className='btn'>Github</a>
          {/*<a href='https://github.com'className='btn btn-primary' target='_blank'>Live Demo</a> */}
         </div>
        </article>
      </div>
    </section>
  )
}

export default portpolio

