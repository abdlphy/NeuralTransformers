import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
  return (
    <div className="d-flex bg-dark ">
      <div className="d-flex flex-column p-3 flex-grow-1 ">
        <div className='d-flex flex-row flex-grow-1 justify-content-center align-items-center'>
        <div className="h-75 w-25 bg-light d-flex flex-column m-5 rounded border border-dark">
            <h4 className='ps-3'>Contact Us</h4>
            <p>s-7, 15 th avenue, 3rd floor,
                Jawaharlal nehru road,
                Ashok Nagar,
                Chennai - 600083.</p>

        </div>
       
       </div>
       
        <div className="d-flex pt-5 flex-column">
        <h4 className='text-light text-center mb-2'>Connect with us on LinkedIn and follow us on Twitter for the latest updates and news</h4>
           <hr style={{color:"white"}}/>
           <div className="d-flex flex-row">
            <div className="d-flex bg-dark w-25 h-75 text-light align-items-center justify-content-center me-2">
            <FacebookIcon/>
            </div>
            <div className="d-flex bg-dark w-25 h-75 text-light align-items-center justify-content-center me-2" >
            <YouTubeIcon/>
            </div>
            <div className="d-flex bg-dark w-25 h-75 text-light align-items-center justify-content-center me-2">
            <InstagramIcon/>
            </div>
            <div className="d-flex bg-dark w-25 h-75 text-light align-items-center justify-content-center me-2">
            <TwitterIcon />
            </div>
            <div className="d-flex bg-dark w-25 h-75 text-light align-items-center justify-content-center me-2">
            <LinkedInIcon>
              <a href="linkedin.com/company/transformers-ai/" className=""></a>
            </LinkedInIcon>
            </div>
            </div> 
            <br className='text-light'/>

        </div>



      </div>
    </div>
  )
}

export default Footer