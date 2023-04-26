import React from 'react'
import PortBoxes from './PortBoxes'
import './WebPortfolio.css'



const Portfolio = () => {
  return (
    <section className='portfolio-section' id='portfolio'>
        <div className='about-heading'>
                <h2 data-aos="fade-in" className='gradient-two'>Featured <span className='red'>Projects</span></h2>
                <span className='line'></span>
        </div>

        <section className='port-container'>
            <PortBoxes />
        </section>
    </section>
  )
}

export default Portfolio