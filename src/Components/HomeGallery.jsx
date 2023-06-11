import React from 'react'
import './Styles/HomeGallery.css'
import pic from '../Assets/top.png'

function Homegallery() {
  return (
    <div className='gallerybox'>
      <div className='gallery'>Gallery</div>
      <div className='gallimgs'>
        <div className='gallimginner'>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
            <div className='gallimg '>
              <img src={pic} alt="" />
            </div>
        </div>

      </div>
    </div>
  )
}

export default Homegallery
