import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navigation/Nav'
import Intro from './Components/Intro/Intro'
import WebPortfolio from './Components/WebPortfolio/Portfolio'
import Portfolio from './Components/WebPortfolio/Portfolio'
import Latest from './Components/Latest/Latest'

const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <Portfolio />
     
      <Contact />
      <Footer />
    </>
  )
}

export default App