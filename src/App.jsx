//functional componant
import React from 'react'
import Header from './component/header/header'
import Nav from './component/nav/Nav'
import About from './component/About/about'
import Experience from './component/Experience/experience'
import Services from './component/Services/services'
import Portpolio from './component/portpolio/portpolio'
import Testimonials from './component/testimonials/testimonials'
import Contact from './component/Contact/contact'
import Footer from './component/footer/footer'

const App = () => {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <Experience/>
    <Services/>
    <Portpolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App