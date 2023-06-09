import React from 'react'
import './Styles/Review.css'

function Reviewcard(props) {
  return (
    <div className='reviewbox'>
    <div className='reviewcardbox' data-status={props.datatype} data-index={props.dataindex}>
      {props.name}
    </div>
    </div>
  )
}

export default Reviewcard
