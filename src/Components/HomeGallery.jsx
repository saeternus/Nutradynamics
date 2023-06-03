import React from 'react'
import './Styles/HomeGallery.css'
import logo from '../Assets/Logo-removebg-preview 1.png'
import Ben1 from '../Assets/top.png'

function Homegallery() {
  return (
    <div className='gallerybox'>
      <div className='gallery'>Gallery</div>
      <div className='gallimgs'>
        <div className='gallimginner'>
            <div className='gallimg one'></div>
            <div className='gallimg secondflex'>
            <div className='gallimg two'></div>
            <div className='innerflex'>
            <div className='three'></div>
            <div className='four'></div>
            </div>
            </div>
            <div className='gallimg five'></div>
        </div>

      </div>
    </div>
  )
}

export default Homegallery
