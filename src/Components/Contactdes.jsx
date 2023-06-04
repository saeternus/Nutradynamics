import React from 'react'
import './Styles/Contactdes.css'
import Contact from '../Assets/contact.png'

function Contactdes() {
  return (
    <div className='contactdesbox'>
      <div>
      <div className='contactheading'>Contact Us</div>
      <div className='contacttext'>Contact us directly through mail and we
        will responde to your isues within a day
        if no response comes try directly calling on the no provided below </div>
        </div>
      <div className='contanctimg'>
        <img src={Contact} alt="" />
      </div>
    </div>
  )
}

export default Contactdes
