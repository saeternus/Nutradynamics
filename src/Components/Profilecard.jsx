import React from 'react'
import './Styles/Profilecard.css'
import profile from '../Assets/Profilecard.png'

function Profilecard(props) {
  return (
    <div className='profilecardbox'>
      <div className='textbox'>
        <div className='profilename profilerow'>
            <div className='profiletag'>Name</div>
            <input className='profileinput' type="text" value={props.name} disabled/></div>
        <div className='profilerow'>
            <div className='profiletag'>Email</div>
            <input className='profileinput' type="text" value={props.email} disabled/></div>
        <div className='profilerow'>
            <div className='profiletag'>Mobile</div>
            <input className='profileinput' type="text" value={props.mob} /></div>
      </div>
      <div className='profileimg'>
        <img src={profile} alt="" />
        <div className='verifybutton'>Verify</div>
      </div>
    </div>
  )
}

export default Profilecard
