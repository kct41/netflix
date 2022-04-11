/** @format */

import React from "react";
import {useEffect, useState} from "react";
import "./nav.css";
import logo from "./img/netflix-logo-0.png";
import avatar from "./img/netflix-avatar.png";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null); //2개의 요소 필요하다.
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img className='nav__logo' src={logo} alt='Netflix Logo' />
      <img className='nav__avatar' src={avatar} alt='Netflix Logo' />
    </div>
  );
}

export default Nav;
