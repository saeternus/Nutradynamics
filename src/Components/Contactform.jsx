import React from 'react'
import './Styles/Contactform.css'

function Contactform() {
  return (
    <div className='contactformbox'>
      <div className='inputsnamemob'>
      <input className='name' type="text" placeholder='Name'/>
      <input className='mobile' type="text" placeholder='Mobile no.'/>
      </div>
      <input className='email' type="text" placeholder='Email / Order Id'/>
      <textarea name="" id="" cols="30" rows="10" placeholder='Message / Problem'></textarea>
      <div className='submitbox'>
        <div className='submitbutton'>Submit</div>
      </div>
      <div className='contactnobox'>
        Contact no. : 1111111111
      </div>
    </div>
  )
}

export default Contactform
