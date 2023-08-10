import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import "./styles/home.css";
import second1 from "./images/second 1.png";
import second2 from "./images/second2.png";
import second3 from "./images/second3.png";
import image1 from "./images/image 14.png";
import image2 from "./images/image 15.png";
import image3 from "./images/image 16.png";
import dollar from "./images/dollar_pin.png";
import green from "./images/green star.png";
import recent from "./images/recent.png";
import star from "./images/star stand.png";
import pick1 from "./images/pick1.png";
import lobby from "./images/lobby.png";
import dice from "./images/dice img.png";
import slot from "./images/slot img.png";
import live from "./images/live img.png";
import table from "./images/table_game.png";
import game from "./images/game_show.png";
import BA1 from "./images/BA-1.png";
import BA2 from "./images/BA-2.png";
import BA3 from "./images/BA-3.png";
import BA4 from "./images/BA-4.png";
import BA5 from "./images/BA-5.png";
import BA6 from "./images/BA-6.png";
import BA7 from "./images/BA-7.png";
import BA8 from "./images/BA-8.png";
import BA9 from "./images/BA-9.png";
import BA10 from "./images/BA-10.png";
import BA11 from "./images/BA-11.png";
import BA12 from "./images/BA-12.png";
import BA13 from "./images/BA-13.png";
import BA14 from "./images/BA-14.png";
import BA15 from "./images/BA-15.png";
import BA16 from "./images/BA-16.png";
import BA17 from "./images/BA-17.png";
import BA18 from "./images/BA-18.png";
import BA19 from "./images/BA-19.png";
import BA20 from "./images/BA-20.png";
import BA21 from "./images/BA-21.png";
import BA22 from "./images/BA-22.png";
import BA23 from "./images/BA-23.png";
import BA24 from "./images/BA-24.png";
import BA25 from "./images/BA-25.png";
import BA26 from "./images/BA-26.png";
import best1 from "./images/best img 1.png";
import best2 from "./images/best img 2.png";
import best3 from "./images/best img 3.png";
import best4 from "./images/best img 4.png";
import best5 from "./images/best img 5.png";
import best6 from "./images/best img 6.png";
import best7 from "./images/best img 7.png";
import best8 from "./images/best img 8.png";
import best9 from "./images/best img 9.png";
import best10 from "./images/best img 10.png";
import feature1 from "./images/feature 1.png";
import feature2 from "./images/feature 2.png";
import feature3 from "./images/feature 3.png";
import feature4 from "./images/feature 4.png";
import feature5 from "./images/feature 5.png";
import partner14 from "./images/partner 14.png";
import partner1 from "./images/partner 1.png";
import partner2 from "./images/partner 2.png";
import partner3 from "./images/partner 3.png";
import partner4 from "./images/partner 4.png";
import partner5 from "./images/partner 5.png";
import partner6 from "./images/partner 6.png";
import partner7 from "./images/partner 7.png";
import partner8 from "./images/partner 8.png";
import partner9 from "./images/partner 9.png";
import partner10 from "./images/partner 10.png";
import partner11 from "./images/partner 11.png";
import partner12 from "./images/partner 12.png";
import partner13 from "./images/partner 13.png";
import winner1 from "./images/winner 1.png";
import winner2 from "./images/winner 2.png";
import winner3 from "./images/winner 3.png";
import winner4 from "./images/winner 4.png";
import winner6 from "./images/winner 6.png";
import winner7 from "./images/winner 7.png";
import winner8 from "./images/winner 8.png";
import winner9 from "./images/winner 9.png";
import table1 from "./images/table 1.png";
import table2 from "./images/table 2.png";
import table3 from "./images/table 3.png";
import play from "./images/play-icon.png";
import Footer from "./Footer";
import MobileHome from "./MobileHome";
// import ShitCode from "../pages/ShitCode";
// import BCD from "../pages/BCD";
// import TaskHub from "../pages/TaskHub";
import Chat from "./Chat";

import mark from "./images/best question mark.png";
// Import Swiper React component4
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";

import "swiper/css/bundle";

// import required modules
import { Navigation } from "swiper";
import SwiperCore, { Autoplay } from "swiper";

SwiperCore.use([Autoplay]);

export default function Home() {
  const [showHoverImg, setShowHoverImg] = useState(false);
  const [showHoverImg2, setShowHoverImg2] = useState(false);
  const [showHoverImg3, setShowHoverImg3] = useState(false);

  function showHover() {
    setShowHoverImg(true);
  }
  function hideHover() {
    setShowHoverImg(false);
  }
  function showHover2() {
    setShowHoverImg2(true);
  }
  function hideHover2() {
    setShowHoverImg2(false);
  }
  function showHover3() {
    setShowHoverImg3(true);
  }
  function hideHover3() {
    setShowHoverImg3(false);
  }
  return (
    <div className="home-display-overall">
      <div className="home-display">
        <div className="content-img-swipe">
          <div className="slot-line1-arrows-home-top">
            <div className="slot-arrow-left-home-top">
              <h3> &#10094;</h3>
            </div>
            <div className="slot-arrow-right-home-top">
              <h3> &#10095;</h3>
            </div>
          </div>
          <Swiper
            slidesPerView={1}
            // spaceBetween={10}
            speed={2000}
            loop={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            navigation={{
              nextEl: ".slot-arrow-right-home-top",
              prevEl: ".slot-arrow-left-home-top",
            }}
            modules={[Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="home-display-top">
                <div className="home-display-top-images">
                  <img src={image1} alt="image1" width={"100%"} />
                </div>
                <div className="home-display-top-images">
                  <img src={image2} alt="image2" width={"100%"} />
                </div>
                <div className="home-display-top-images">
                  <img src={image3} alt="image3" width={"100%"} />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="home-display-top">
                <div className="home-display-top-images">
                  <img src={second1} alt="image1" width={"100%"} />
                </div>
                <div className="home-display-top-images">
                  <img src={second2} alt="image2" width={"100%"} />
                </div>
                <div className="home-display-top-images">
                  <img src={second3} alt="image3" width={"100%"} />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="home-display-cover">
          <div className="home-page-top-section">
            <div className="home-page-top-first-flex">
              <div className="home-page-top-first-flex-top">
                <img src={dollar} alt="dollar" width={"35px"} />
                <h3>
                  <span>Much </span> Wowo Wins
                </h3>
              </div>

              <Swiper
                slidesPerView={1}
                direction={"vertical"}
                // spaceBetween={30}
                speed={2000}
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                className="mySwiper-top"
              >
                <SwiperSlide>
                  <div className="home-page-top-first-flex-page">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick1} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>David</h2>
                      <h3>
                        Won: <span>$50</span>
                      </h3>
                      <h3>In limbo</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page2">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick1} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Steve</h2>
                      <h3>
                        Won: <span>350</span>
                      </h3>
                      <h3>In limbo</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="home-page-top-first-flex">
              <div className="home-page-top-first-flex-top">
                <img src={star} alt="star" width={"35px"} />
                <h3>
                  <span>Top </span> Winning Games
                </h3>
              </div>

              <Swiper
                slidesPerView={1}
                direction={"vertical"}
                speed={2000}
                loop={true}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                className="mySwiper-top"
              >
                <SwiperSlide>
                  <div className="home-page-top-first-flex-page">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick1} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>$50</span>
                      </h3>
                      <h3>In limbo</h3>
                    </div>
                  </div>
                  <div className="home-page-top-first-flex-page2">
                    <div className="home-page-top-first-flex-page-img">
                      <img src={pick1} alt="pick1" width={"53px"} />
                    </div>
                    <div className="home-page-top-first-flex-page-texts">
                      <h2>Hidden</h2>
                      <h3>
                        Won: <span>350</span>
                      </h3>
                      <h3>In limbo</h3>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className="home-page-top-third-flex">
              <div className="home-page-top-third-flex-top">
                <div className="home-page-top-third-flex-top-img">
                  <img src={green} alt="green" width={"35px"} />
                  <h3>
                    <span>Trending </span> Right Now
                  </h3>
                </div>
                <div className="slot-line1-arrows-third-top">
                  <div className="slot-arrow-left-third-top">
                    <h3> &#10094;</h3>
                  </div>
                  <div className="slot-arrow-right-third-top">
                    <h3> &#10095;</h3>
                  </div>
                </div>
              </div>

              <Swiper
                slidesPerView={3}
                spaceBetween={10}
                direction={"vertical"}
                speed={2000}
                loop={true}
                autoplay={{
                  delay: 1000,
                  disableOnInteraction: false,
                }}
                navigation={{
                  nextEl: ".slot-arrow-left-third-top",
                  prevEl: ".slot-arrow-right-third-top",
                }}
                modules={[Navigation]}
                className="mySwiper"
              >
                <SwiperSlide></SwiperSlide>
                <SwiperSlide></SwiperSlide>
              </Swiper>

              <div className="home-page-top-third-flex-page-cover-full">
                <div className="home-page-top-third-flex-page-cover">
                  <div className="home-page-top-third-flex-page">
                    <div className="home-page-top-third-flex-page-img">
                      <img src={pick1} alt="pick1" width={"83px"} />
                    </div>
                    <div className="home-page-top-third-flex-page-texts">
                      <h2>Crash</h2>
                      <h3>BA Original</h3>
                    </div>
                  </div>
                  <div className="home-page-top-third-flex-page">
                    <div className="home-page-top-third-flex-page-img">
                      <img src={pick1} alt="pick1" width={"83px"} />
                    </div>
                    <div className="home-page-top-third-flex-page-texts">
                      <h2>Crash</h2>
                      <h3>BA Original</h3>
                    </div>
                  </div>
                  <div className="home-page-top-third-flex-page">
                    <div className="home-page-top-third-flex-page-img">
                      <img src={pick1} alt="pick1" width={"83px"} />
                    </div>
                    <div className="home-page-top-third-flex-page-texts">
                      <h2>Crash</h2>
                      <h3>BA Original</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="home-page-top-fourth-flex">
              <div className="home-page-top-third-flex-top">
                <div className="home-page-top-third-flex-top-img">
                  <img src={recent} alt="recent" width={"35px"} />
                  <h3>Recently Added</h3>
                </div>
                <div className="slot-line1-arrows-fourth-top">
                  <div className="slot-arrow-left-fourth-top">
                    <h3> &#10094;</h3>
                  </div>
                  <div className="slot-arrow-right-third-top">
                    <h3> &#10095;</h3>
                  </div>
                </div>
              </div>

              <div className="home-page-top-third-flex-page-cover">
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={pick1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={pick1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
                <div className="home-page-top-third-flex-page">
                  <div className="home-page-top-third-flex-page-img">
                    <img src={pick1} alt="pick1" width={"83px"} />
                  </div>
                  <div className="home-page-top-third-flex-page-texts">
                    <h2>Crash</h2>
                    <h3>BA Original</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lobby">
            <div className="lobby_container">
              <div className="lobby_img">
                <img src={lobby} alt="lobby" width={"25px"} />
              </div>
              <div className="lobby_text">
                <h3>Lobby</h3>
              </div>
            </div>

            <div className="lobby_content">
              <div className="lobby_img">
                <img src={dice} alt="lobby" width={"35px"} />
              </div>
              <div className="lobby_text">
                <h3>Original</h3>
              </div>
            </div>

            <div className="lobby_content">
              <div className="lobby_img">
                <img src={slot} alt="lobby" width={"35px"} />
              </div>
              <div className="lobby_text">
                <h3>Slots</h3>
              </div>
            </div>

            <div className="lobby_content">
              <div className="lobby_img">
                <img src={live} alt="lobby" width={"35px"} />
              </div>
              <div className="lobby_text">
                <h3>Live casino</h3>
              </div>
            </div>

            <div className="lobby_content">
              <div className="lobby_img">
                <img src={table} alt="lobby" width={"35px"} />
              </div>
              <div className="lobby_text">
                <h3>Table Game</h3>
              </div>
            </div>

            <div className="lobby_content game_show">
              <div className="lobby_img">
                <img src={game} alt="lobby" width={"35px"} />
              </div>
              <div className="lobby_text">
                <h3>Game Show</h3>
              </div>
            </div>
          </div>

          <div className="ba-display">
            <div className="ba-display-text-top">
              <h4>
                BA <span> IN-HOUSE</span> <br />
                GAMES
              </h4>
            </div>

            <div className="ba-display-main">
              <div className="ba-display-main-display">
                <div className="ba-display-main-flex">
                  <NavLink to="/Crash">
                    <div className="ba-display-main-image">
                      <div className="overlay">
                        <div className="image_overlay">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA1} alt="BA1" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Crash</h4>
                      <div className="ba-display-main-image-text-slide">
                        <div className="ba-display-main-image-text-slide1">
                          Michael <span>won : $20</span>
                        </div>
                        <div className="ba-display-main-image-text-slide2">
                          Michael <span>won : $20</span>
                        </div>
                        <div className="ba-display-main-image-text-slide3">
                          Michael <span>won : $20</span>
                        </div>
                      </div>
                      <div>
                        <img
                          onMouseEnter={showHover}
                          onMouseLeave={hideHover}
                          src={mark}
                          alt="mark"
                          width={"15px"}
                        />
                      </div>
                    </div>
                  </NavLink>
                  {showHoverImg && (
                    <div className="ba-display-main-image-text-pop">
                      <div className="ba-display-main-image-text-pop-inner">
                        <div className="ba-display-main-image-text-pop-flex1">
                          <h1>RTP:</h1>
                          <h2>99%</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex2">
                          <h1>Recently Biggest Win:</h1>
                          <h2>20000.000X</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex3">
                          <div className="ba-display-main-image-text-pop-flex3-1">
                            <h3>Multiple</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-2">
                            <h3>Our Best Games</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-3">
                            <h3>BC Originals</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-4">
                            <h3>NG Original</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Baccarat">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA2} alt="BA2" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Baccarat</h4>
                      <img
                        onMouseEnter={showHover2}
                        onMouseLeave={hideHover2}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                  {showHoverImg2 && (
                    <div className="ba-display-main-image-text-pop2">
                      <div className="ba-display-main-image-text-pop-inner">
                        <div className="ba-display-main-image-text-pop-flex1">
                          <h1>RTP:</h1>
                          <h2>99%</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex2">
                          <h1>Recently Biggest Win:</h1>
                          <h2>6000.000X</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex3">
                          <div className="ba-display-main-image-text-pop-flex3-1">
                            <h3>Multiple</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-2">
                            <h3>Our Best Games</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-3">
                            <h3>BC Originals</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-4">
                            <h3>NG Original</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Tower Legend">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA3} alt="BA3" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Tower Legend</h4>
                      <img
                        onMouseEnter={showHover3}
                        onMouseLeave={hideHover3}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>

                  {showHoverImg3 && (
                    <div className="ba-display-main-image-text-pop2">
                      <div className="ba-display-main-image-text-pop-inner">
                        <div className="ba-display-main-image-text-pop-flex1">
                          <h1>RTP:</h1>
                          <h2>99%</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex2">
                          <h1>Recently Biggest Win:</h1>
                          <h2>6000.000X</h2>
                        </div>
                        <div className="ba-display-main-image-text-pop-flex3">
                          <div className="ba-display-main-image-text-pop-flex3-1">
                            <h3>Multiple</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-2">
                            <h3>Our Best Games</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-3">
                            <h3>BC Originals</h3>
                          </div>
                          <div className="ba-display-main-image-text-pop-flex3-4">
                            <h3>NG Original</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* <BCD /> */}
                {/* <ShitCode /> */}
                {/* <TaskHub /> */}
                {<Chat />}

                <div className="ba-display-main-flex">
                  <NavLink to="/Classic Dice">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA4} alt="BA4" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Classic Dice</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="ba-display-main-display2">
                <div className="ba-display-main-flex">
                  <NavLink to="/Crash Trenball">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA5} alt="BA5" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Crash Trenball</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Mine">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA6} alt="BA6" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Mine</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Mine">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={BA7} alt="BA7" width={"100%"} />
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Mine</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Roulette">
                    <div className="overlay2">
                      <div className="image_overlay2">
                        <img src={play} alt="play" width={"100%"} />
                        <h2>House Edge 1%</h2>
                      </div>
                      <img src={BA8} alt="BA8" width={"100%"} />
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Roulette</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/King of fortune">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA9} alt="BA9" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>King of fortune</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="ba-display-main-display2">
                <div className="ba-display-main-flex">
                  <NavLink to="/Plinko">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA10} alt="BA10" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Plinko</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Wheel">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA11} alt="BA11" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Wheel</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Cave of Plunder">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA12} alt="BA12" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Cave of Plunder</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Ultimate Dice">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA13} alt="BA13" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Ultimate Dice</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Oriental Beauties">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA14} alt="BA14" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Oriental Beauties</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="ba-display-main-display2">
                <div className="ba-display-main-flex">
                  <NavLink to="/Limbo">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA15} alt="BA15" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Limbo</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Saviour Sword">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA16} alt="BA16" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Saviour Sword</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Roulette Multiplayer">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA17} alt="BA17" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Roulette Multiplayer</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Video Poker">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA18} alt="BA18" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Video Poker</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Baccarat Multiplayer">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA19} alt="BA19" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Baccarat Multiplayer</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="ba-display-main-display2">
                <div className="ba-display-main-flex">
                  <NavLink to="/Limbo">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA20} alt="BA20" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Limbo</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Keno">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA21} alt="BA21" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Keno</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Egyptian adventure">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA22} alt="BA22" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Egyptian adventure</h4>
                      <img src={mark} alt="mark" width={"15px"} />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Keno Multiplayer">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA23} alt="BA23" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Keno Multiplayer</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Blackjack">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA24} alt="BA24" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Blackjack</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>

              <div className="ba-display-main-display2">
                <div className="ba-display-main-flex">
                  <NavLink to="/Hilo">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA25} alt="BA25" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Hilo</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Evoplay">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA26} alt="BA26" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      {/* <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Evoplay">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA26} alt="BA26" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      {/* <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Belatra">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA26} alt="BA26" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      {/* <h4>Belatra</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Belatra">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={BA26} alt="BA26" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      {/* <h4>Belatra</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      /> */}
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="best-display">
            <div className="best-display-top">
              <div className="best-display-text-top">
                <h4>
                  BEST FROM <br />
                  THE <span> SLOTS</span>
                </h4>
              </div>
              <div className="best-display-text-top-left">
                <div className="best-text-left">
                  <h4>
                    All <span>20</span> Slots
                  </h4>
                </div>
                <div className="slot-line1-arrows-third-top">
                  <div className="slot-arrow-left-third-top">
                    <h3> &#10094;</h3>
                  </div>
                  <div className="slot-arrow-right-third-top">
                    <h3> &#10095;</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="best-display-main">
              <div className="best-display-main-display">
                <div className="ba-display-main-flex">
                  <NavLink to="/Evoplay">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best1} alt="best" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Red Tiger">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best2} alt="best2" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Red Tiger</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/GameArt">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best3} alt="best3" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>GameArt</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Endorphina">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best4} alt="best4" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Endorphina</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Spinomenal">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best5} alt="best5" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Spinomenal</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="best-display-main">
              <div className="best-display-main-display ">
                <div className="ba-display-main-flex">
                  <NavLink to="/Hacksaw">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best6} alt="best6" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Hacksaw</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Microgaming">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best7} alt="best7" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Microgaming</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/PG soft">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best8} alt="best8" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>PG soft</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Endorphina">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best9} alt="best9" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Endorphina</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Hacksaw">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best10} alt="best10" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Hacksaw</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="best-display">
            <div className="best-display-top">
              <div className="best-display-text-top">
                <h4>
                  FEATURE <br />
                  BUY-IN <span> SLOTS</span>
                </h4>
              </div>
              <div className="best-display-text-top-left">
                <div className="best-text-left">
                  <h4>
                    All <span>20</span> Slots
                  </h4>
                </div>
                <div className="slot-line1-arrows-third-top">
                  <div className="slot-arrow-left-third-top">
                    <h3> &#10094;</h3>
                  </div>
                  <div className="slot-arrow-right-third-top">
                    <h3> &#10095;</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="best-display-main">
              <div className="best-display-main-display">
                <div className="ba-display-main-flex">
                  <NavLink to="/Evoplay">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={feature1} alt="feature1" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Red Tiger">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={feature2} alt="feature2" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Red Tiger</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/GameArt">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={feature3} alt="feature3" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>GameArt</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Endorphina">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={feature4} alt="feature4" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Endorphina</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Spinomenal">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={feature5} alt="feature5" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Spinomenal</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="partner">
            <div className="partner-display">
              <div className="partner-row-1">
                <img src={partner1} alt="partner1" width={"83px"} />
                <img src={partner2} alt="partner2" width={"83px"} />
                <img src={partner3} alt="partner3" width={"83px"} />
                <img src={partner4} alt="partner4" width={"83px"} />
                <img src={partner5} alt="partner5" width={"83px"} />
                <img src={partner6} alt="partner6" width={"83px"} />
                <img src={partner7} alt="partner7" width={"83px"} />
              </div>

              <div className="partner-row-2">
                <img src={partner8} alt="partner8" width={"83px"} />
                <img src={partner9} alt="partner9" width={"83px"} />
                <img src={partner10} alt="partner10" width={"83px"} />
                <img src={partner11} alt="partner11" width={"83px"} />
                <img src={partner12} alt="partner12" width={"83px"} />
                <img src={partner13} alt="partner13" width={"83px"} />
                <img src={partner14} alt="partner14" width={"83px"} />
              </div>
            </div>
          </div>

          <div className="best-display">
            <div className="best-display-top">
              <div className="best-display-text-top">
                <h4>
                  RECOMMENDED <br />
                  LIVE <span> SLOTS</span>
                </h4>
              </div>
              <div className="best-display-text-top-left">
                <div className="best-text-left">
                  <h4>
                    All <span>20</span> Slots
                  </h4>
                </div>
                <div className="slot-line1-arrows-third-top">
                  <div className="slot-arrow-left-third-top">
                    <h3> &#10094;</h3>
                  </div>
                  <div className="slot-arrow-right-third-top">
                    <h3> &#10095;</h3>
                  </div>
                </div>
              </div>
            </div>

            <div className="best-display-main">
              <div className="best-display-main-display">
                <div className="ba-display-main-flex">
                  <NavLink to="/Evoplay">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best1} alt="best" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Evoplay</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Red Tiger">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best2} alt="best2" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Red Tiger</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/GameArt">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best3} alt="best3" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>GameArt</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Endorphina">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best4} alt="best4" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Endorphina</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Spinomenal">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best5} alt="best5" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Spinomenal</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>

            <div className="best-display-main">
              <div className="best-display-main-display ">
                <div className="ba-display-main-flex">
                  <NavLink to="/Hacksaw">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best6} alt="best6" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Hacksaw</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Microgaming">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best7} alt="best7" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Microgaming</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/PG soft">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best8} alt="best8" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>PG soft</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Endorphina">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best9} alt="best9" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Endorphina</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>

                <div className="ba-display-main-flex">
                  <NavLink to="/Hacksaw">
                    <div className="ba-display-main-image">
                      <div className="overlay2">
                        <div className="image_overlay2">
                          <img src={play} alt="play" width={"100%"} />
                          <h2>House Edge 1%</h2>
                        </div>
                        <img src={best10} alt="best10" width={"100%"} />
                      </div>
                    </div>
                    <div className="ba-display-main-image-text">
                      <h4>Hacksaw</h4>
                      <img
                        onMouseEnter={showHover}
                        onMouseLeave={hideHover}
                        src={mark}
                        alt="mark"
                        width={"15px"}
                      />
                    </div>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="winner-cover">
            <div className="winner">
              <div className="winner-flex-1">
                <div className="flex-1-img">
                  <h4>
                    WINNER WINNER <br />
                    CHICKEN DINNER
                  </h4>
                  <img src={winner2} alt="best" />

                  <div className="flex-text-text">
                    <img src={winner1} alt="best" />
                  </div>
                </div>
              </div>

              <div className="top">
                <img src={winner9} alt="best" />
              </div>
              <div className="winner-flex-2">
                <div className="winner-flex1">
                  <div className="flex2">
                    <img src={winner6} alt="best" />
                  </div>
                  <div className="flex3">
                    <img src={winner3} alt="best" />
                    <h4>Hidden</h4>
                  </div>
                  <div className="flex4">
                    <h4>$45,000</h4>
                  </div>
                </div>

                <div className="winner-flex1">
                  <div className="flex2-1">
                    <img src={winner8} alt="best" />
                  </div>
                  <div className="flex3-1">
                    <img src={winner4} alt="best" />
                    <h4>Atomic Slots</h4>
                  </div>
                  <div className="flex4-1">
                    <h4>$45,000</h4>
                  </div>
                </div>

                <div className="winner-flex1">
                  <div className="flex2">
                    <img src={winner7} alt="best" />
                  </div>
                  <div className="flex3">
                    <img src={winner3} alt="best" />
                    <h4>Hidden</h4>
                  </div>
                  <div className="flex4">
                    <h4>$45,000</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="latest">
            <div className="row">
              <h4>Latest Bets</h4>
            </div>
            <div className="row-1">
              <h4>High rollers</h4>
            </div>
            <div className="row-2">
              <h4>Wager contest</h4>
            </div>
          </div>

          <div className="table">
            <div className="table-items">
              <div className="table-head1">
                <h4>Game</h4>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>

                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
                <div className="table-game-row1">
                  <img src={table1} alt="table1" width={"20px"} />
                  <h4>Lorem</h4>
                </div>
              </div>

              <div className="table-head2">
                <h4>Player</h4>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
                <div className="table-player2">
                  <h4>Ipsum</h4>
                </div>
              </div>

              <div className="table-head3">
                <h4>Bet Amount</h4>
                <div className="table-bet-row">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
              </div>

              <div className="table-head4">
                <h4>Multipier</h4>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
                <div className="table-player2">
                  <h4>0.00x</h4>
                </div>
              </div>
              <div className="table-head5">
                <h4>Bet Amount</h4>
                <div className="table-bet-row">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table2" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table3" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table3" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table2} alt="table3" width={"20px"} />
                </div>
                <div className="table-bet-row1">
                  <h4>0.000000</h4>
                  <img src={table3} alt="table3" width={"14px"} />
                </div>
              </div>
            </div>
          </div>

          <div className="footer">
            <div className="footer-head">
              <h4>Crypto Online Casino</h4>
            </div>
            <div className="footer-text">
              <h4>
                Casinos online have not always been around, but we can safely
                say that online casinos have been used a lot since they came on
                the market. And it's not in short demand nor options, and now in
                2022, we have 1000s and 1000s to pick from - it's just a matter
                of what you like and what payment options you would like to see
                at the casino.
                <br />
                <br />
                Players are always looking for something new, which will help
                make the gaming experience so much better and more accessible.
                Allowing the player to focus on the absolute fun of a casino,
                that's right, the games themselves.
                <br />
                <br />
                That's why we are now going to tell you all you need to know
                about a crypto casino or bitcoin gambling or bitcoin casino,
                whatever you want to call it.
              </h4>
            </div>
            <div className="footer-link">
              <h4>
                Show more <span>&raquo;</span>
              </h4>
            </div>
          </div>

          <Footer />
        </div>
      </div>

      <MobileHome />
    </div>
  );
}
