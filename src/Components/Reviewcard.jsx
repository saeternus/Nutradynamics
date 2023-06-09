import React from 'react'
import './Styles/Review.css'
import TestimonialCard from './TestimonialCard'

function Reviewcard(props) {
  return (
    <div className='reviewbox'>
    <div className='reviewcardbox' data-status={props.datatype} data-index={props.dataindex}>
      <TestimonialCard name={props.name} rating={props.rating} img={props.profilepic} title={props.title} text={props.text} />
    </div>
    </div>
  )
}

export default Reviewcard
