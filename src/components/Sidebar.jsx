import React, { useState } from "react";
import SwiperComponent from "../components/SwiperComponent";
import menuImage from "../assets/images/menuImage.jpeg";
import { BiMenu } from "react-icons/bi";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpened, setIsOpened] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const handleClicked = () => {
    setIsOpened(!isOpened);
  };

  return (
    <>
      <div className="sidebarAll">
        <button className="btn" onClick={handleToggleSidebar}>
          <BiMenu className="menu-sidebar-btn" />
        </button>
        <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
          <div className="menu">
            <p>Menu</p>
          </div>
          <div className="imgContainer">
            <img src={menuImage} alt="" />
          </div>
          <SwiperComponent />

          <div className="filter">
            <div className="purpose">
              <div className="title">
                <button className="buttonFilter" onClick={handleClick}>
                  Flowers
                </button>
                <i className="fa-solid minus fa-minus"></i>
              </div>
              {isOpen && (
                <div className="detailed">
                  <p>Hazir buketler</p>
                  <p>Dipcek</p>
                  <p>Qutu ve sebet</p>
                  <p>Bilik gunu</p>
                  <p>Test</p>
                </div>
              )}
            </div>
            <div className="purpose">
              <div className="title">
                <button className="buttonFilter" onClick={handleClicked}>
                  Christmas tree
                </button>
                <i className="fa-solid minus fa-minus"></i>
              </div>
              {isOpened && (
                <div className="detailed">
                  <p>Ozel gunler</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
