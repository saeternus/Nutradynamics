import React from 'react'
import './Styles/Cartcard.css'
import plus from "../Assets/Group 60.png"
import minus from '../Assets/Group 61.png'

function Cartcard(props) {
  return (
    <div className='cartproductcard'>
      <div className='productimage'>
        <img src={props.product.imgage} alt="" />
      </div>
      <div className='nameandlinks'>
        <div className='productnamecart'>{props.product.name}</div>
        <div className='removelink'>Remove</div>
      </div>
      <div className='quantittybuttons'>
        <div className='plussign'>
          <img src={plus} alt="" />
        </div>
        <div className='productcount'>{props.product.count}</div>
        <div className='minussign'>
          <img src={minus} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Cartcard
