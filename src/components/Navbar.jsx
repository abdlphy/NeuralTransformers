import React from 'react'
import { Link } from "react-router-dom";
import { useState } from 'react'
 
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
     <a className='navbar-brand text-dark mx-5' href="">Neural Transformers</a>
     <button className='navbar-toggler' type='button' data-toggle='collapse' data-targert='#navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
       <span className='navbar-toggler-icon'></span>
     </button>

     <div className="collapse navbar-collapse ms-5" id='navbarSupportedContent'>
       <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className='nav-link text-dark fs-5' href='/' >Home</a>
        </li>
        <li className='nav-item'>
          <a className='nav-link text-dark fs-5' href='/products'>Products</a>
         </li>
         <li className='nav-item'>
          <a className='nav-link text-dark fs-5' href='/services'>Services</a>
         </li>
         <li className='nav-item'>
          <a className='nav-link text-dark fs-5' href='/about'>About Us</a>
         </li>
         <li className='nav-item'>
          <a className='nav-link text-dark fs-5' href='\'>Contact</a>
         </li>

       </ul>

      <div className="collapse mx-5 navbar-collapse justify-content-end" id='navbarSupportedContent'>  
       <ul className="navbar-nav mr-auto nav-pills nav-fill">
         <li className='nav-item'>
         <button type="button" class="btn btn-lg btn-light btn-outline-dark" data-toggle="popover" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
         <a href='/signup'>SIGNUP</a>
        
          </button>
         </li>
         <li className='nav-item'>
          <a className='nav-link text-dark fs-5' href='\'>LOGIN</a>
         </li>

       </ul>
      </div>
     </div>
    </nav>
  )
}

export default Navbar