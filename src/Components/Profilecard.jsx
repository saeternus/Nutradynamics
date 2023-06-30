import React from 'react'
import './Styles/Profilecard.css'
import profile from '../Assets/Profilecard.png'

function Profilecard(props) {
  const dummydata = props.data

  return (
    <div className='profilecardbox'>
      <div className='textbox'>
        <div className='profilename profilerow'>
            <div className='profiletag'>Name</div>
            <input className='profileinput' type="text" value={dummydata.name} disabled/></div>
        <div className='profilerow'>
            <div className='profiletag'>Email</div>
            <input className='profileinput' type="text" value={dummydata.email} disabled/></div>
        <div className='profilerow'>
            <div className='profiletag'>Mobile</div>
            <input className='profileinput' type="text" value={dummydata.mob} /></div>

      <div className='verifybutton'>Verify</div>
      </div>
    </div>
  )
}

export default Profilecard
