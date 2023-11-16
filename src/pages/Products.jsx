import React from 'react'
import Navbar from '../components/Navbar'

function Products() {
  return (
  <>
  <Navbar/>
  <div className='m-5'>
    <h3>Products</h3>
    <hr/>
    <h3>ChatBot</h3>
    <div className='d-flex flex-row my-4 pb-5'>
        <div className="w-50 h-50">
            <img src="https://www.bing.com/th/id/OGC.fa08e3e7222afb42beaa1168985641ea?pid=1.7&rurl=https%3a%2f%2ftexterra.ru%2fupload%2fimg%2f22-10-2019%2fbot.gif&ehk=eCUHCfd0IpDQHchw59oZhntSiouq4BrP9yAT3F4hl7Q%3d" alt="" className="w-100 h-75" />
        </div>
       
            <p className='mx-3'>Our advanced chatbot solutions integrate natural language processing and
             machine learning algorithms to provide seamless customer interactions. Enhance your
            customer experience and streamline your business operations with our customizable chatbot
             platform.</p>
        
    </div>
    <h3>OCR(Optical Character Recognition)</h3>
    <div className='d-flex flex-row my-4 pb-5'>
        <div className="w-50 h-50">
            <img src="https://i.pinimg.com/originals/d2/6b/51/d26b51307134ac7179fb51a423acaab2.gif" alt="" className="w-100 h-100" />
        </div>
      
            <p className='mx-3'>Transform paper-based documents into digital
assets with our OCR technology. Extract text from images or documents accurately and
efficiently, enabling easy data processing and information retrieval.
</p>
        
    </div>
    <h3>Document Summarizer </h3>
    <div className='d-flex flex-row my-4 pb-5'>
        <div className="w-50 h-50">
            <img src="https://miro.medium.com/freeze/max/1200/1*yE-S7HG0Rg-ACAcnjvKf5Q.gif" alt="" className="w-100 h-100" />
        </div>
        
            <p className='mx-3'>Tackle information overload with our document summarization
solution. Automatically generate concise summaries of lengthy texts, saving time and effort
while maintaining the key insights.
</p>
        
    </div>
   </div> 
  </>
    
  )
}

export default Products