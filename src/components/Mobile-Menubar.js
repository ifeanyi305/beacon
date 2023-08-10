import "./styles/mobile-menubar.css";
import { NavLink } from "react-router-dom";
import dice from "../components/images/Dice.svg";
import home from "../components/images/home.svg";
import arrow from "../components/images/arrow.svg";
import slot from "../components/images/slot.svg";
import live from "../components/images/live-casino.svg";
import promotion from "../components/images/promotion.svg";
import Baoriginal from "./Ba_original";
import lotteryImg from "../components/images/lottery.svg";
import affiliateImg from "../components/images/affilliate.svg";
import VIPImg from "../components/images/VIP.svg";
import probablyImg from "../components/images/probably.svg";
import recent from "../components/images/recent.svg";
import favourite from "../components/images/favourite.svg";
import moon from "../components/images/moon.svg";
import setting from "../components/images/setting.svg";
import telegram from "../components/images/telegram.svg";
import facebook from "../components/images/facebook.svg";
import instagram from "../components/images/instagram.svg";
import twitter from "../components/images/twitter.svg";

export default function MobileMenubar(props) {
  const cancel = () => {
    props.cancel("close");
  };

  function switchHandle() {
    alert("Light mode is comming Soon");
  }

  return (
    <div className="MenuBar-mobile">
      <div className="MenuBar-mobile">
        <div className="MenuBar-mobile-header">
          <div className="casino">
            <NavLink to="/">Casino</NavLink>
          </div>
          <div className="sport">
            <h3>Sport</h3>
          </div>
          <div className="cancel" onClick={cancel}>
            <span>&#10006;</span>
          </div>
        </div>

        <div className="MenuBar-mobile-container">
          <div className="MenuBar-mobile-content">
            <NavLink to="/">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={home} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Home</h3>
                </div>
              </div>
            </NavLink>

            <div className="ba-original">
              <div className="game-icon">
                <img src={dice} alt="casino" />
              </div>
              <div className="game-text">
                <h3>BA Original</h3>
              </div>
              <div className="game-arrow">
                <img src={arrow} alt="casino" />
              </div>
            </div>
            <Baoriginal />

            <NavLink to="/slots">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={slot} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Slots</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="/live-casino">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={live} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Live Casino</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="/promotion">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={promotion} alt="casino" />
                </div>
                <div className="promotion">
                  <h3>Promotions</h3>
                </div>
              </div>
            </NavLink>
            <hr />
            <NavLink to="/lottery">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={lotteryImg} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Lottery</h3>
                </div>
              </div>
            </NavLink>
            <NavLink to="/affiliate">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={affiliateImg} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Affiliate</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="/vip">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={VIPImg} alt="casino" />
                </div>
                <div className="promotion">
                  <h3>VIP</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={probablyImg} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Probably Fair</h3>
                </div>
              </div>
            </NavLink>

            <hr />

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={favourite} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>Favourite Games</h3>
                </div>
              </div>
            </NavLink>

            <NavLink to="/probably-fair">
              <div className="nav-details">
                <div className="game-icon">
                  <img src={recent} alt="casino" />
                </div>
                <div className="game-text">
                  <h3>My Recent Play</h3>
                </div>
              </div>
            </NavLink>

            <hr />

            <div className="language-currency">
              <div className="container">
                <div className="switch-mode">
                  <div className="switch" onClick={switchHandle}>
                    <div className="switch-contents">
                      <div className="moon">
                        <img src={moon} alt="" />
                      </div>
                      <div className="setting">
                        <img src={setting} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="mode">
                    <div className="mode-contents">
                      <h3>Dark mode</h3>
                      <h4>Currently</h4>
                    </div>
                  </div>
                </div>

                <hr />
                <div className="contents">
                  <p>Language & Currently</p>
                  <div className="input">
                    <input type="text" placeholder="English" />
                    <img src={arrow} alt="" />
                  </div>
                </div>

                <hr />

                <div className="socials">
                  <p>Social Media</p>
                  <div className="social-contents">
                    <a href="https://www.telegram.com">
                      <img src={telegram} alt="" />
                    </a>
                    <a href="https://www.facebook.com">
                      <img src={facebook} alt="" />
                    </a>
                    <a href="https://www.instagram.com">
                      <img src={instagram} alt="" />
                    </a>
                    <a href="https://www.twitter.com">
                      <img src={twitter} alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
