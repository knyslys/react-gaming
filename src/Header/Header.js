import React from "react";
import logo from "../Images/logo.png";

import classes from "./Header.module.css";
function Header() {
  return (
    <div className={classes.logo}>
      <img src={logo} alt="logo" className={classes.logo__img} />
    </div>
  );
}

export default Header;
