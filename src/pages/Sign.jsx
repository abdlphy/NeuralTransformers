import React from 'react'
function Sign() {
  return(
    <div className='bg-dark w-100 h-100'>
      <div className='bg-light w-25 h-100 rounded'>
        <h2>SIGN UP</h2>
        <hr/>
        <div>
          <input type="email" placeholder='Enter Email' className="" />
        </div>
        <div>
         
          <input type="text" placeholder='Enter Name' className="" />
        </div>
        <div>
      
          <input type="text" placeholder='Enter Name' className="" />
        </div>
        <div>

          <input type="text" placeholder='Enter Name' className="" />
        </div>
        <button className="">SIGN UP</button>
        <div>
        <h3>Forget Password</h3>
        <button className="">LOG IN</button>
      </div>
      </div>
      
    </div>
)

 

  
}

export default Sign