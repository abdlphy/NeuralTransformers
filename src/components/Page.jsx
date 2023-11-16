import React from 'react'

function Page() {
  return (
    <div className="d-flex flex-column">
        <div className="h-25 w-100 flex-column position-relative">
            <img src="https://hellofuture.orange.com/app/uploads/2018/01/Intro-HELLO-FUTURE-1920x1080_v2.gif" alt="" className="h-25 w-100" />
            <div className="position-absolute start-0 top-50">
                <h1 className="text-light fs-1">Welcome to Neural Transformers</h1>
                <p className=""></p>
            </div>
             

        </div>
        <div className='m-5 d-flex flex-column align-items-center justify-content-center'>
        <h3 className='m-2'> Why Choose Us:</h3>
        <p className='fs-4'>- Expertise in cutting-edge technologies: Our team stays updated with the latest
advancements in data science and automation technologies, allowing us to deliver
innovative and effective solutions.
- Customized approach: We understand that every business is unique. Hence, we tailor our
services to address your specific challenges and goals, ensuring maximum impact and
value.
- Quality and accuracy: We prioritize delivering high-quality and accurate solutions that meet
your requirements and exceed expectations.
- Collaborative partnership: We believe in building strong partnerships with our clients</p>
        </div>
       
    </div>
  )
}

export default Page