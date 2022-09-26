import React from "react";
import logo from "../../ema-john-resources/images/Logo.svg";
import "./Header.css";
const Header = () => {
  return (
    <nav>
      <div className="header-wrapper">
        <img src={logo} alt="" />
        <div className="header-navs">
          <a href="/order">Order</a>
          <a href="/order-review">Order Review</a>
          <a href="/login">Login</a>
        </div>
      </div>
    </nav>
  );
};

export default Header;
