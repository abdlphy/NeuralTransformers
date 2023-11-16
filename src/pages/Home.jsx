import React from 'react'
import SignUp from './Sign'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Newsletter from '../components/Newsletter'
import Page from '../components/Page'

function Home() {
  return (
    <>
    <Navbar/>
    <Page/>
    <Newsletter/>
    <Footer/>
    
    </>
  )
}

export default Home