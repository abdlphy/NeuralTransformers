import React from 'react'
import Navbar from '../components/Navbar'
import Services1 from '../components/Services1'
import Footer from '../components/Footer'

function Services() {
  return (
    <>
    <Navbar/>
    <div className='m-5'>
        <h3 className=''>Services</h3>
        <hr/>
        <h4>**Data Science Projects and Automation:**</h4>
        <p className='m-3'>At NeuralTransformers.ai, we offer a range of services in data science projects and
automation. Leveraging our expertise in cutting-edge technologies, we help businesses
extract valuable insights from their data, streamline processes, and drive intelligent
decision-making. Our services include:</p>
       <Services1/>
    </div>
    <Footer/>
    </>
  )
}

export default Services