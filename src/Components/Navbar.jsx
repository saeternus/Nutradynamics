import React, { useState } from "react";
import "./Styles/Navbar.css";
import { Outlet, Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import jwtDecode from 'jwt-decode';

function Navbar() {
  const [toggle, settoggle] = useState(true);

  function toggler() {
    if (toggle) {
      settoggle(false);
    } else {
      settoggle(true);
    }
  }

  // const login = (credentialResponse) => {
  //   sessionStorage.setItem("token", credentialResponse.tokenObj.id_token);
  //   axios.post("http://localhost:8000/")
  // }

  return (
    <>
      <div className="box">
        <div className="logo"></div>
        <div className="list">
          <ul className="items">
            <Link to="/">Home</Link>
          </ul>
          <ul className="items product">
            <Link to="/Product">Product</Link>
            <div className="productlist">
              <ul className="productitems">
                <Link to="/Catalog">Catalog</Link>
              </ul>
              <ul className="productitems">
                <Link to="/Gallery">Gallery</Link>
              </ul>
              <ul className="productitems">
                <Link to="/Testimonial">Testimonial</Link>
              </ul>
            </div>
          </ul>
          <ul className="items">
            <Link to="/AboutUs">About Us</Link>
          </ul>
          <ul className="items">
            <Link to="/Contact">Contact</Link>
          </ul>
          <ul className="items">
            <GoogleOAuthProvider clientId="402607447137-ha31oqf84fmo6f0rsmtn2ci0n46jns26.apps.googleusercontent.com">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  // login(credentialResponse);
                  console.log(credentialResponse);
                }}
                onError={() => {
                  alert("Login Failed, Please try again.");
                }}
              />
            </GoogleOAuthProvider>
          </ul>
        </div>
        <div
          className={`navbartoogle ${toggle ? "Menu" : "Close"}`}
          onClick={toggler}
        ></div>
      </div>
      <div className={`verticallist ${toggle ? "menu" : "close"}`}>
        <ul className="item" onClick={toggler}>
          <Link to="/">Home</Link>
        </ul>
        <ul className="item" onClick={toggler}>
          <Link to="/Catalog">Catalog</Link>
        </ul>
        <ul className="item" onClick={toggler}>
          <Link to="/Gallery">Gallery</Link>
        </ul>
        <ul className="item" onClick={toggler}>
          <Link to="/Testimonial">Testimonial</Link>
        </ul>
        <ul className="item" onClick={toggler}>
          <Link to="/AboutUs">About Us</Link>
        </ul>
        <ul className="item" onClick={toggler}>
          <Link to="/Contact">Contact</Link>
        </ul>
        <ul className="item " onClick={toggler}>
          <Link to="/Login">Login</Link>
        </ul>
      </div>
      <Outlet />
    </>
  );
}

export default Navbar;
