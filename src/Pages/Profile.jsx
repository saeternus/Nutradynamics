import React, { useEffect, useState } from 'react'
import './Styles/Profile.css'
import * as Components from '../Components/index'

function Profile() {
  return (
    <div className='profilebox'>
        <div className='emptydiv'></div>
        <div className='profilecontainer'>
          <Components.Profilenavigation/>
        </div>
    </div>
  )
}

export default Profile
