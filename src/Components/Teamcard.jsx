import React from 'react'
import './Styles/Teamcard.css'

function Teamcard(props) {
  return (
    <div className='teamcardbox'>
      <div className='memimg' style={{background: `url(${props.img}) no-repeat`, backgroundSize:'cover'}}></div>
      <div className='memname'>{props.name}</div>
      <div className='memname'>{props.title}</div>
    </div>
  )
}

export default Teamcard
