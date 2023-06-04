import React from 'react'
import * as Components from '../Components/index'
import './Styles/Contact.css'

function Contact() {
  return (
    <div className='contactbox'>
      <Components.Contactdes/>
      <Components.Contactform/>
    </div>
  )
}

export default Contact
