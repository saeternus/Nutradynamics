import React from 'react'
import './Styles/benefits.css'

function benefits(props) {
  return (
    <div className='card'>
      <div className='benefitimg'>
        <img src={`${props.img}`} alt="benefitsimg" />
      </div>
      <div className='benefittext'>{`${props.text}`}</div>
    </div>
  )
}

export default benefits
