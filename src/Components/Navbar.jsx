import React, { useState } from 'react'
import './Styles/Navbar.css'
import { Outlet, Link } from "react-router-dom";
import cart from '../Assets/add-to-cart.png'


function Navbar(props) {
  const [toggle, settoggle] = useState(true)

  function toggler() {
    if (toggle) {
      settoggle(false)
    }
    else {
      settoggle(true)
    }
  } 

  return (
    <>
      <div className='box'>
      <Link to='/'>
        <div className='comp'>
        <div className='logo'>
        </div>
        <div className='compname'>Nutridynamics</div>
        </div>
        </Link>
        <div className='list'>
          <ul className='items product'>
            <Link to='#'>Product</Link>
            <div className='productlist'>
              <ul className='productitems'>

                <Link to='/Catalog'>Catalog</Link>

              </ul>
              <ul className='productitems'>

                <Link to='/Gallery'>Gallery</Link>

              </ul>
              <ul className='productitems'>
                <Link to='/Testimonial'>Testimonial</Link>
              </ul>
            </div>
          </ul>
          <ul className='items'>

            <Link to='/AboutUs'>About Us</Link>

          </ul>
          <ul className='items'>

            <Link to='/Contact'>Contact</Link>

          </ul>
          <ul className='items'>

            <Link to='/Cart'>
              <img src={cart} alt="" />
            </Link>

          </ul>
          {props.loggedin ?
          <ul className='items login'>

            <Link to='/MyProfile'>Profile</Link>

          </ul>
          :
          <ul className='items login'>

            <Link to='/Login'>Login</Link>

          </ul>
        }
        </div>
        <div className={`navbartoogle ${(toggle) ? 'Menu'
          :
          'Close'}`} onClick={toggler}>
        </div>
      </div>
      <div className={`verticallist ${(toggle) ? 'menu' : 'close'}`} >
        <ul className='item' onClick={toggler}>

          <Link to='/'>Home</Link>

        </ul>
        <ul className='item' onClick={toggler}>

          <Link to='/Catalog'>Catalog</Link>

        </ul>
        <ul className='item' onClick={toggler}>

          <Link to='/Gallery'>Gallery</Link>

        </ul>
        <ul className='item' onClick={toggler}>

          <Link to='/Testimonial'>Testimonial</Link>

        </ul>
        <ul className='item' onClick={toggler}>

          <Link to='/AboutUs'>About Us</Link>

        </ul>
        <ul className='item' onClick={toggler}>

          <Link to='/Contact'>Contact</Link>

        </ul>
        <ul className='item ' onClick={toggler}>

          <Link to='/Login'>Login</Link>

        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
