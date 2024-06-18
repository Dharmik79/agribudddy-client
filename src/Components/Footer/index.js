/* eslint-disable react/jsx-no-target-blank */
import React, { memo } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

import { GlobalContext } from "../../context/States/GlobalState";

function Footer() {
  const { Global } = React.useContext(GlobalContext);
  const login =
    typeof Global?.login == "string"
      ? JSON.parse(Global?.login)
      : Global?.login;
  return (
    <footer>
      <div className="Primary_Header">
        <div className="container">
          <div className="row gy-5 ">
            <div className="col-xxl-6  col-md-6 col-12">
              <div className="CompanyInfo">
                <div className="Footer_Logo flex text-white align-items-center">
                  <img src={logo} className="img-fluid" alt="Logo" />
                  <div className="font-bold text-xl">AgriBuddy</div>
                </div>
                <p className=" mt-20">
                  
                </p>
              </div>
            </div>
            <div className="col-xxl-3  col-md-3 col-12 d-flex flex-column align-items-center">
              <div className="QuickLinks ">
                <h4 className="FooterLinks">Quick Links</h4>
                <ul className="mt-35">
                  <li>
                    <Link to="/Products">Products</Link>
                  </li>
                  <li>
                    <Link to="/Cart">Cart</Link>
                  </li>
                  <li>
                    <Link to="/Products">Products</Link>
                  </li>
                  <li>
                    <Link to="/membership">Pricing</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xxl-3  col-md-3 col-12 d-flex flex-column align-items-center">
              <div className="Information ">
                <h4 className="FooterLinks">Information</h4>
                <ul className="mt-35">
                  <li className="mb-14">
                    <span>
                      <i className="fas fa-phone-alt"></i>
                      Phone:
                    </span>
                    <a href="tel:882569756">1800 XXX XXXX</a>
                  </li>
                  <li className="mb-14">
                    <span>
                      <i className="far fa-envelope"></i>
                      Email:
                    </span>
                    <a href="mailto:info@agribuddy.com">info@agribuddy.com</a>
                  </li>
                  <li>
                    <span>
                      <i className="fas fa-map-marker-alt"></i>
                      Address
                    </span>
                    <p>Regina, SK</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Copyright_Header">
        <div className="container">
          <span className="d-block text-center ">
            Copyright © 2024 AgriBuddy LTD. All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
export default memo(Footer);
