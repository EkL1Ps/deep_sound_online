import React from "react";
import { NavLink } from "react-router-dom";
import "../../styles/style.scss";
import "./Header.scss";

import { IconButton, TextField, Badge } from "@mui/material";
import { YouTube, Instagram } from "@mui/icons-material";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";

function Header() {
  const shareUrl = "https://deepsound.com"; // треба замінити на URL свого веб-сайту
  const phoneNumber = "+1892115963708";
  const formattedPhoneNumber = phoneNumber.replace(
    /(\+\d{2})(\d{3})(\d{3})(\d{2})(\d{2})/,
    "$1 ($2) $3 $4 $5"
  );

  return (
    <div className="header__container">
      <div className="header__green">
        <ul className="header__list">
          <NavLink to="/">
            <HomeSharpIcon sx={{ color: "white" }} />
          </NavLink>
          <li className="header__list-item">
            Bulliville str., North Island, USA
          </li>

          <li className="header__list-item">
            <a href={`tel:${formattedPhoneNumber}`} style={{ color: "white" }}>
              {formattedPhoneNumber}
            </a>
          </li>
        </ul>
        <div className="header__green-icons">
          <IconButton
            aria-label="Поділитися на Інстаграмі"
            component="a"
            href={`https://www.instagram.com/${shareUrl}`}
            target="_blank"
            sx={{ color: "white" }}
          >
            <Instagram />
          </IconButton>

          <IconButton
            aria-label="Поділитися на Інстаграмі"
            component="a"
            href={`https://www.youtube.com/share?url=${shareUrl}`}
            target="_blank"
            sx={{ color: "white" }}
          >
            <YouTube />
          </IconButton>

          <IconButton
            aria-label="Поділитися на Фейсбук"
            component="a"
            href={`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`}
            target="_blank"
            sx={{ color: "white" }}
          >
            <FacebookRoundedIcon />
          </IconButton>
        </div>
      </div>

      <div className="header__search-box">
        <NavLink
          to="/"
          style={{ color: "#303030", fontSize: "28px", fontWeight: "500" }}
        >
          Deepsound
        </NavLink>

        <TextField
          id="outlined-search"
          placeholder="Search"
          type="search"
          variant="outlined"
          sx={{
            "& .MuiOutlinedInput-root": {
              height: "40px",
              borderRadius: "13px",
              width: "70vh",
            },
            "&:hover fieldset": {
              borderColor: "#797777 !important", // Замініть "your_hover_color" на бажаний колір
            },
            "&.Mui-focused fieldset": {
              borderColor: "#797777 !important", // Замініть "your_focus_color" на бажаний колір
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#797777 !important", // Додаємо товщину бордера при фокусі
            },
          }}
          InputProps={{
            endAdornment: (
              <SearchRoundedIcon sx={{ color: "rgba(0, 0, 0, 0.54)" }} />
            ),
          }}
        />
        <div>
          <a
            href={`tel:${formattedPhoneNumber}`}
            style={{
              color: "black",
              fontSize: "16px",
              fontWeight: "400",
              marginRight: "60px",
            }}
          >
            {formattedPhoneNumber}
          </a>
        </div>
        <div className="header__icons">
          <NavLink to="/login">
            <img
              src="images/profile_icon.png"
              alt="profile"
              width={26}
              height={26}
            />
          </NavLink>

          <Badge color="error">
            <FavoriteBorderIcon
              sx={{ fontSize: "34px", marginBottom: "5px", color: "#797777" }}
            />
          </Badge>
          <Badge color="error">
            <LocalMallOutlinedIcon
              sx={{ fontSize: "34px", marginBottom: "8px", color: "#797777" }}
            />
          </Badge>
        </div>
      </div>
      <div className="header__route-box">
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/shop"
        >
          Shop
        </NavLink>
        <div className="dropdown__box">
          <NavLink
            style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
            to="/shop"
          >
            Category{" "}
            <span style={{ fontSize: "14px", color: "#3b3838" }}>&#9660;</span>
          </NavLink>
          <ul className="dropdown__box-list">
            <li className="dropdown__list-item">Accsessories</li>
            <li className="dropdown__list-item">Musical instruments</li>
            <li className="dropdown__list-item">Players</li>
          </ul>
        </div>
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/arrives"
        >
          New Arrives
        </NavLink>
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/sale"
        >
          Sale
        </NavLink>
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/footer"
        >
          Contacts
        </NavLink>
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/fqa"
        >
          F.Q.A.
        </NavLink>
        <NavLink
          style={{ fontSize: "20px", fontWeight: "400px", color: "#303030" }}
          to="/about"
        >
          Our Company
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
