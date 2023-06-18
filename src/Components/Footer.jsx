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
              Head Office :- BHU NO.- 14 KH. NO 366, NEAR NEW STAR BHATTA LAULAI
              CHINHAT , LUCKNOW,UTTAR PRADESH ,INDIA 226010{" "}
            </p>
            <p>
              {" "}
              Reg. Office :- Road D , krishnapuri, Devpuri, Raipur Chhattisgarh
              492015{" "}
            </p>
            <p>
              Branch Office:- B-73 , Sector 11 A ,Kamal Vihar, Old Dhamtari Road
              Raipur Chhattisgarh 492015{" "}
            </p>
            <p>CIN:- U15135UP2022PTC163365. GSTIN :- 09AAICN2200N1ZE</p>
          </div>
          <div className="footerlist">
            <h2>Quick Links</h2>
            <ul className="footeritems">
              <Link to="/" className="links">
                Home
              </Link>
            </ul>
            <ul className="footeritems product">
              <Link to="/Product" className="links">
                Product
              </Link>
              <div className="footerproductlist">
                <ul className="footerproductitems">
                  <Link to="/Catalog" className="links">
                    Catalog
                  </Link>
                </ul>
                <ul className="footerproductitems">
                  <Link to="/Gallery" className="links">
                    Gallery
                  </Link>
                </ul>
                <ul className="footerproductitems">
                  <Link to="/Testimonial" className="links">
                    Testimonial
                  </Link>
                </ul>
              </div>
            </ul>
            <ul className="footeritems">
              <Link to="/AboutUs" className="links">
                About Us
              </Link>
            </ul>
            <ul className="footeritems">
              <Link to="/Contact" className="links">
                Contact
              </Link>
            </ul>
            <ul className="footeritems login">
              <Link to="/Login" className="links">
                Login
              </Link>
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
