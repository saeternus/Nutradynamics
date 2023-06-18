import React from 'react'
import './Styles/Productcard.css'
import { Navigate } from 'react-router-dom'

function Productcard(props) {
    // function productnavigation(){
    //     Navigate(`/Catalog/${props.id}`)
    // }

    const Discount = <div className='discountamount'>
        {props.discount}
    </div>

    return (
        <div className='cardbox'>
            <div className='productdiscount'>
                {(props.discount === '0') ? <></> : Discount}
            </div>
            <div className='productimg'>
                <img src={props.img} alt="" />
            </div>
            <div className='productinfo'>
                <div className='row'>
                    <div className='productname'>{props.name}</div>
                    <div className='prouctprice'>{props.price}</div>
                </div>
                {/* <div className='row'>
                    <div className='productrating'>{props.rating}/5 </div>
                    <div className='productview'
                    //  onClick={productnavigation}
                    >View</div>
                </div> */}
            </div>

        </div>
    )
}

export default Productcard
