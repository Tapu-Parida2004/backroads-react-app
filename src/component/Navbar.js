import React from "react";
import logo from "../images/logo.svg";
import { pageLinks, socialLinks } from "../data.js";
import Pagelink from "./Pagelink.js";
import Icon from "./Icon.js";
const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} style={{ width: "170px" }} alt="logo"></img>
            <button className="nav-toggle" id="nav-toggle">
              <i class="fa-solid fa-bars"></i>
            </button>
          </div>
          <ul className="nav-links" id="nav-links">
            {pageLinks.map((pageLink) => {
              return <Pagelink {...pageLink} key={pageLink.id} />;
            })}
          </ul>
          <ul className="nav-links" id="nav-icons">
            {socialLinks.map((socialLink) => {
              return <Icon {...socialLink} key={socialLink.id} />;
            })}
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};
export default Navbar;
