import React from "react";
import "./styles/navbar.css";
import mobileIcon from "./images/mobile-icon.svg";
import mobileMenu from "./images/mobile-menu.svg";
import icon1 from "./images/home icon 1.png";
import icon3 from "./images/home icon 3.png";
import icon4 from "./images/home icon 4.png";
import play from "./images/play.png";
import spin1 from "./images/spin rotaete.png";
import spin2 from "./images/spin rotaete pointer.png";
import key from "./images/key svg.svg";
import bitcoinIcon from "./images/bitcoin icon svg.svg";
import bitcoinLogo from "./images/bitcoin logo cover.svg";
import shitcode from "./images/shitcode icon.svg";

import MenuBar from "./MenuBar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles/navbar.css";
import menu from "../components/images/menu.svg";
import logo from "../components/images/betarena.png";
import search from "../components/images/search.svg";
import MobileMenubar from "./Mobile-Menubar";
// import Chat from "./Chat";

export default function Navbar(props) {
  const [searchEL, setSearch] = useState("search");
  const [NavBarPage, setNavBarPage] = useState("Navbar-container");
  const [count, setCount] = useState(true);
  const [menucount, setMenuCount] = useState(1);

  function searchHandle() {
    if (count) {
      setSearch("search-line");
      setCount(false);
    } else {
      setSearch("search");
      setCount(true);
    }
  }
  function menuHandler() {
    if (menucount === 1) {
      props.style("BetArena-tablet");
      setNavBarPage("newNavbar-container");
      // document.querySelector('.Navbar-container').style.left = '50px'
      setMenuCount(2);
    } else {
      props.style("BetArena-destop");
      setMenuCount(1);
      setNavBarPage("Navbar-container");
      // document.querySelector('.Navbar-container').style.left = '225px'
    }
  }

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const MobileHandle = () => {
    setShowMobileMenu(true);
  };

  const close = (data) => {
    setShowMobileMenu(false);
  };

  return (
    <>
      {showMobileMenu && <MobileMenubar cancel={close} />}

      <div className="mobile-display-navbar">
        <div className="mobile-head-container">
          <div className="mobile-first-nav">
            <div className="mobile-first-logo">
              <img src={mobileIcon} alt="mobileMenu" />
            </div>
            <div className="mobile-first-menu" onClick={MobileHandle}>
              <img src={mobileMenu} alt="mobileMenu" />
            </div>
          </div>

          <div className="mobile-extreme-nav">
            <div className="mobile-login">
              <NavLink to="/login">
                <h3>Sign in</h3>
              </NavLink>
            </div>
            <div className="mobile-signup">
              <NavLink to="/signup">
                <button>Sign up</button>
              </NavLink>
            </div>
          </div>
        </div>

        <div className="mobile-item-display">
          <div className="mobile-item-display-flex">
            <div className="mobile-item-display-task">
              <img src={icon1} alt="icon1" />
            </div>

            <div className="mobile-item-display-rotate">
              <img className="mobile-rotate" src={spin1} alt="spin1" />
              <img
                className="mobile-item-display-pointer"
                src={spin2}
                alt="spin2"
              />
            </div>

            <div className="mobile-item-display-second">
              <div className="mobile-item-display-key">
                <img src={icon3} alt="icon3" />
                <img
                  className="mobile-item-display-lock"
                  src={key}
                  alt="mobileMenu"
                />
              </div>
            </div>

            <div className="mobile-item-display-third">
              <div className="mobile-item-display-third-key">
                <img src={icon4} alt="icon4" />
                <img
                  className="mobile-item-display-third-lock"
                  src={key}
                  alt="mobileMenu"
                />
              </div>
            </div>

            <div className="mobile-item-display-fourth">
              <img src={shitcode} alt="bitcoinIcon" />
            </div>

            <div className="mobile-item-display-fifth">
              <div className="mobile-item-display-bitcoin">
                <img src={bitcoinIcon} alt="bitcoinIcon" />
                <img
                  className="mobile-item-display-bitcoin-logo-cover"
                  src={bitcoinLogo}
                  alt="bitcoinLogo"
                />
              </div>
            </div>
          </div>

          <div className="mobile-item-display-play">
            <div className="mobile-item-display-playing">
              <img src={play} alt="play" />
            </div>
            <div className="mobile-item-display-play-num">
              <p>204</p>
            </div>
          </div>
        </div>
      </div>

      <div className="Navbar">
        <MenuBar menu={menucount} />
        <div className="normal">
          <div className={NavBarPage}>
            <div className="Navbar-content">
              <div className="menu" onClick={menuHandler}>
                <img src={menu} alt="" />
              </div>
              <div className="logo">
                <NavLink to="/">
                  {" "}
                  <img src={logo} alt="" />
                </NavLink>
              </div>
              <div className={searchEL} onClick={searchHandle}>
                <img src={search} alt="" />
                <input
                  type="text"
                  placeholder="Game name | Provider | Category Tag"
                />
              </div>
              <div className="login">
                <NavLink to="login">Login</NavLink>
              </div>
              <div className="signup">
                <NavLink to="login">Signup</NavLink>
              </div>
              {/* <div className="play">
                <p>28</p>
                <img src={play} alt="" />
              </div> */}
            </div>
            {/* <Chat /> */}
          </div>
        </div>
      </div>
    </>
  );
}
