import React from 'react'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='bg-dark text-wh border-0 card'>
      <img src="\Images\hd_bg.jpg" alt="" className='card-img opacity-50 ' style={{height:"550px"}} />
      <div className='flex flex-col justify-content-center card-img-overlay'>
      <div className='container'>
        <div className='display-3 fw-bolder MS-0 text-white card-title h5'>NEW SESSION ARRIVALS</div>
        <p className='text-white display-5'>CHECK OUT ALL TRENDS<span style={{color:"red"}}> MEN'S</span>
        </p>
      </div>
      </div>
      </div>
      
    </div>
  )
}

export default Hero

// d-flex flex-column justify-content-center card-img-overlay