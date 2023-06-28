import React from 'react'
import './Styles/Ordercard.css'
import Orderbox from '../Assets/Order.png'

function Ordercard(props) {
    let orderdata = props.data
  return (
    <div className='ordercardbox'>
            <div className='orderdate'>
                <div>Orderid <br /> {orderdata.orderid}</div>
                <div>Order on <br /> {orderdata.orderedon}</div>
                <div>Amount <br /> {orderdata.Amount}</div>
            </div>
            <div className='orderdes'>
                {orderdata.orderdetails}
            </div>
        <div className='orderimg'>
      <img src={Orderbox} alt="" />
      </div>
    </div>
  )
}

export default Ordercard
