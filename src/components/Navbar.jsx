import React, { useContext, useEffect, useState } from "react";
import headerLogo from "../assets/images/header-logo.png";
import CartNumber from "./CartNumber";
import FavoriteNumber from "./FavoriteNumber";
import SearchInput from "./SearchInput";
import Select from "./Select";
import UserDrop from "../components/UserDrop";
import { Link } from "react-router-dom";
import Sidebar from "./Sidebar";
import { CartContext } from "../cartContext";

import { FiLogOut } from "react-icons/fi";
import { TbLocation } from "react-icons/tb";

const NavBar = () => {
  const { isUser, checkUser, logOut } = useContext(CartContext);

  useEffect(() => {
    checkUser();
  }, []);

  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <>
      <div className="navBar">
        <div className="contain">
          <Link to="/" className="navbar1">
            <img src={headerLogo} alt="header-logo" />
          </Link>
          <div className="navbar2">
            <div className="navbarCenter">
              <SearchInput />
            </div>
            <div className="navbarRight">
              <Select />
              <Link to={"/favorites"}>
                <FavoriteNumber />
              </Link>
              <Link to={"/cart"}>
                <CartNumber />
              </Link>

              <UserDrop />
              {isUser ? (
                <button className="logOut" onClick={logOut}>
                  <FiLogOut fontSize="1.4rem" color="#10071880" />
                </button>
              ) : null}
            </div>
          </div>
          <div className="navbarElse">
            <i className="fa-solid searchIcon fa-xl fa-magnifying-glass" onClick={handleClick}></i>
            <i className="fa-solid locationIcon fa-xl fa-location-arrow"></i>
          </div>
        </div>
      </div>
      {clicked && (
        <div>
          <form>
            <input type="text" className="responsiveSearch" placeholder="Search" />
            {/* <SearchInput/> */}
          </form>
        </div>
      )}
      <div className="navbarBottom">
        <div className="container">
          <div className="dropdownAlls">
            <div className="dropdown">
              <button className="dropbtn">Purpose</button>
              <div className="dropdown-content">
                <a href="#">Bilik gunu</a>
                <a href="#">Yeni is</a>
                <a href="#">Dogum gunu</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Flowers</button>
              <div className="dropdown-content">
                <a href="#">Hazir Buketler</a>
                <a href="#">Dipcek</a>
                <a href="#">Qutu ve Sebet</a>
                <a href="#">Bilik gunu</a>
              </div>
            </div>
            <div className="dropdown">
              <button className="dropbtn">Christmas tree</button>
              <div className="dropdown-content">
                <a href="#">Ozel gunler</a>
              </div>
            </div>
          </div>
          <div className="navbarbottomRight">
            <TbLocation className="locationIcon" fontSize="1.7rem" />
            <span>Follow the order</span>
          </div>
        </div>
      </div>
      <Sidebar />
    </>
  );
};

export default NavBar;
