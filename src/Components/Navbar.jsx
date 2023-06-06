import React, { useState } from 'react'
import './Styles/Navbar.css'
import { Outlet, Link } from "react-router-dom";


function Navbar() {
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
        <div className='logo'>
        </div>
        <div className='list'>
          <ul className='items'>

            <Link to='/'>Home</Link>

          </ul>
          <ul className='items product'>
            <Link to='/Product'>Product</Link>
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
          <ul className='items login'>

            <Link to='/Login'>Login</Link>

          </ul>
        </div>
        <div className={`navbartoogle ${(toggle) ? 'Menu'
          :
          'Close'}`} onClick={toggler}>
        </div>
      </div>
      <div className={`verticallist ${(toggle) ? 'menu' : 'close'}`} >
        <ul className='item'>

          <Link to='/'>Home</Link>

        </ul>
        <ul className='item'>

          <Link to='/Product'>Product</Link>

        </ul>
        <ul className='item'>

          <Link to='/Catalog'>Catalog</Link>

        </ul>
        <ul className='item'>

          <Link to='/Gallery'>Gallery</Link>

        </ul>
        <ul className='item'>

          <Link to='/Testimonial'>Testimonial</Link>

        </ul>
        <ul className='item'>

          <Link to='/AboutUs'>About Us</Link>

        </ul>
        <ul className='item'>

          <Link to='/Contact'>Contact</Link>

        </ul>
        <ul className='item '>

          <Link to='/Login'>Login</Link>

        </ul>
      </div>
      <Outlet />
    </>
  )
}

export default Navbar
