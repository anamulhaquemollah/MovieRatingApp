import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png"

import "./header.scss"

const Header = () => {
  return <div className="header">
    <div className="logo">
    <Link to="/"><h2 className="logo">RMDB</h2></Link>
    </div>

    <div className="user-img">
      <img src={user} alt="" />
    </div>
  </div>;
};

export default Header;
