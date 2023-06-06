import React from "react";
import { Link } from "react-router-dom";
import "./Styles/Footer.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="footerlogo"></div>
          <div className="footeraddress">
            <h2>Registered Office Address</h2>
            <p className="addresscontent">
              Flipkart Internet Private Limited, Buildings Alyssa, Begonia &
              Clove Embassy Tech Village, Outer Ring Road, Devarabeesanahalli
              Village, Bengaluru, 560103, Karnataka, India CIN :
              U51109KA2012PTC066107
            </p>
          </div>
          <div className="footersociallist">
          <h2>Social Links</h2>
            <ul className="sociallinkitem">
              <a
                href="https://www.facebook.com/Flipkart"
                className="links"
              > Google
              </a>
            </ul>
            <ul className="sociallinkitem">
              <a
                href="https://www.facebook.com/Flipkart"
                className="links"
              > Instagram
              </a>
            </ul>
            <ul className="sociallinkitem">
              <a
                href="https://www.facebook.com/Flipkart"
                className="links"
              > Facebook
              </a>
            </ul>
          </div>
          <div className="footerlist">
          <h2>Quick Links</h2>
            <ul className="footeritems">
              <Link to="/"className="links">Home</Link>
            </ul>
            <ul className="footeritems product">
              <Link to="/Product"className="links">Product</Link>
              <div className="footerproductlist">
                <ul className="footerproductitems">
                  <Link to="/Catalog"className="links">Catalog</Link>
                </ul>
                <ul className="footerproductitems">
                  <Link to="/Gallery"className="links">Gallery</Link>
                </ul>
                <ul className="footerproductitems">
                  <Link to="/Testimonial"className="links">Testimonial</Link>
                </ul>
              </div>
            </ul>
            <ul className="footeritems">
              <Link to="/AboutUs" className="links">About Us</Link>
            </ul>
            <ul className="footeritems">
              <Link to="/Contact"className="links">Contact</Link>
            </ul>
            <ul className="footeritems login">
              <Link to="/Login"className="links">Login</Link>
            </ul>
          </div>
        </div>
        <div className="footerbottom">
          <div className="footerbottomleft">
            <p>© 2023 All rights reserved</p>
          </div>
          <div className="footerbottomright">
            <p>Privacy Policy | Terms of Service | Sitemap</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
