import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div style={{ fontSize: "40px", marginLeft: "50px", marginTop: "50px" }}>
      <NavLink style={{ fontSize: "20px", marginLeft: "50px" }} to="/">
        Home
      </NavLink>
      <NavLink style={{ fontSize: "20px", marginLeft: "50px" }} to="/login">
        Login
      </NavLink>
      <NavLink style={{ fontSize: "20px", marginLeft: "50px" }} to="/shop">
        Shop
      </NavLink>
      <NavLink style={{ fontSize: "20px", marginLeft: "50px" }} to="/*">
        NotFound
      </NavLink>
    </div>
  );
}

export default Header;
