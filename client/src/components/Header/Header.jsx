import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            backgroundColor: "#3E5C53",
          }}
        >
          <div
            style={{
              margin: "0 auto",
              minWidth: "1280px",
              padding: "6.5px",
            }}
          >
            Audioshop
          </div>
        </div>
        <div
          style={{
            fontSize: "40px",
            margin: "0 auto",
            minWidth: "1440px",
          }}
        >
          <div style={{ width: "1280px", margin: "40px auto" }}>
            <NavLink style={{ fontSize: "20px" }} to="/">
              Home
            </NavLink>
            <NavLink
              style={{ fontSize: "20px", marginLeft: "50px" }}
              to="/login"
            >
              Login
            </NavLink>
            <NavLink
              style={{ fontSize: "20px", marginLeft: "50px" }}
              to="/shop"
            >
              Shop
            </NavLink>
            <NavLink style={{ fontSize: "20px", marginLeft: "50px" }} to="/*">
              NotFound
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
