import React from 'react'
import './Styles/Ordercard.css'
import Orderbox from '../Assets/Order.png'

function Ordercard() {
    let orderdata ={
      orders :[{
        orderid : '11111',
        status : 'delivered',
        orderedon : '11-02-2022',
        orderdetails : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ipsum!',
        Amount : '10000'
      },{
        orderid : '11111',
        status : 'delivered',
        orderedon : '11-02-2022',
        orderdetails : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ipsum!',
        Amount : '10000'
      },{
        orderid : '11111',
        status : 'delivered',
        orderedon : '11-02-2022',
        orderdetails : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ipsum!',
        Amount : '10000'
      },{
        orderid : '11111',
        status : 'delivered',
        orderedon : '11-02-2022',
        orderdetails : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi, ipsum!',
        Amount : '10000'
      },]
    }
  return (
    <div className='orerlistbox'>
    <div className='orderhead'>Orders</div>
    <div className='orderlist'>
      {orderdata.orders.map((e)=>{
        return(
          <div className='ordercardbox'>
            <div className='orderdate'>
                <div>Orderid <br /> {e.orderid}</div>
                <div>Order on <br /> {e.orderedon}</div>
                <div>Amount <br /> {e.Amount}</div>
            </div>
            <div className='orderdes'>
                {e.orderdetails}
            </div>
        <div className='orderimg'>
      <img src={Orderbox} alt="" />
      </div>
    </div>
        )
      })}
    </div>
  </div>
  )
}

export default Ordercard
