import React from 'react'
import './Styles/Profile.css'
import * as Components from '../Components/index'

function Profile() {
    let dummydata = {
        name : 'Arnav Prakash',
        email : 'choclateboyarnav@google.com',
        mob : '2222222222'
    }

    let dummyorder = {
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
    <div className='profilebox'>
        <div className='emptydiv'></div>
        <div className='profilecontainer'>
            <Components.Profilecard name={dummydata.name} email={dummydata.email} mob={dummydata.mob} />
        </div>
        <div className='orerlistbox'>
          <div className='orderhead'>Orders</div>
          <div className='orderlist'>
            {dummyorder.orders.map((e)=>{
              return(
                <Components.Ordercard data = {e}/>
              )
            })}
          </div>
        </div>
    </div>
  )
}

export default Profile
