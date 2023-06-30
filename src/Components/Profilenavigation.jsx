import React, { useEffect, useState } from 'react'
import './Styles/Profilenavigation.css'
import { Link } from "react-router-dom";
import * as Components from '../Components/index'

function Profilenavigation(props) {

    const [active,setactive] = useState(true)
    // const [comp,setcomp] = useState()


  let dummydata = {
    name : 'Arnav Prakash',
    email : 'choclateboyarnav@google.com',
    mob : '2222222222'
}

    // useEffect(() => {
    //   const URL = window.location.href
    //   const arr = URL.split('/')
    //   const name = arr[arr.length - 1]
    //   setcomp(name)
    // }, [active]);

  return (
    <>
    <div className='profilenavbox'>
      <div className='username'>Hello {dummydata.name},</div>
      <hr />
      <Link to='/MyProfile' onClick={()=>setactive(true)}>
      <div className={`profilenavbutton ${active ? 'active' : 'inactive'}`}>My Profile</div>
      </Link>
      <Link to= '/MyProfile' onClick={()=>setactive(false)}>
      <div className={`profilenavbutton ${active ? 'inactive' : 'active'}`} >Orders</div>
      </Link>
    </div>
    <div className='compcont'>
{active? <Components.Profilecard data = {dummydata}/>:<Components.Ordercard/>}
</div>
</>
  )
}

export default Profilenavigation
