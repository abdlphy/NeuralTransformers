import React from 'react'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

function About() {

  return (
    <>
    <Navbar/>
    <div className='d-flex flex-column mx-5 mt-5'>
      <h2 className='bg-dark text-light h-50 p-4 rounded opacity-75'>About</h2>
      <hr style={{alignItems:"center"}}/>
      <div className='d-flex flex-column'>
        <p className='fs-3 m-3'>
        At NeuralTransformers.ai, we are passionate about leveraging the power of AI and machine
    learning to develop intelligent solutions that solve real-world problems. With a team of
     experienced professionals and industry experts, we are committed to delivering innovative
    products and services that push the boundaries of technological advancements. Our
    dedication to excellence has earned us recognition in the industry, and we continue to strive
    for excellence in everything we do
        </p>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default About