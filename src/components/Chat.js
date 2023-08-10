import React from "react";
import "./styles/chat.css";
import cup from "./images/cup.svg";
import not from "./images/not.svg";
import chat from "./images/chatimg.svg";
import { NavLink } from "react-router-dom";

export default function Chat() {
  return (
    <div className="chat-display">
      <div className="chat-page">
        <div className="chat-top">
          <div className="chat-top-flex">
            <div className="chat-top-flex1">
              <h3>English</h3>
            </div>
            <div className="chat-top-flex2">
              <h4> &#10095;</h4>
            </div>
          </div>
          <div className="chat-top-flex22">
            <div className="chat-top-flex22-1">
              <img src={not} alt="not" width={"20px"} />
            </div>
            <div className="chat-top-flex22-2">
              <img src={cup} alt="cup" width={"19px"} />
            </div>
            <div className="chat-top-flex22-3">
              <h3> &#10006;</h3>
            </div>
          </div>
        </div>
        <div className="chat-body">
          <div className="chat-body-inner">
            <div className="chat-body-inner1">
              <div className="chat-body-inner2">
                <div className="chat-body-inner3">
                  <div className="chat-body-inner3-1">
                    <img src={chat} alt="chat" width={"40px"} />
                    <div className="chatImg-text">
                      <span>V</span>
                      <span>Rank</span>
                    </div>
                  </div>
                  <div className="chat-body-inner3-2">
                    <div className="chat-body-inner3-2-1">
                      <h4>hard life</h4>
                      <h4>12:00</h4>
                    </div>
                    <div className="chat-body-inner3-2-2">
                      <h3>to the fullest</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="chat-footer">
            <div className="send-input">
              <div className="send-input-area">
                <div className="send-input-area-main">
                  <textarea placeholder="Your message"></textarea>
                </div>
                <div className="send-input-area-btn">
                  <button>
                    <h3> &#10147;</h3>
                  </button>
                </div>
              </div>
            </div>
            <div className="send-input-last">
              <div className="send-input-last1">
                <div className="send-input-last2">
                  <NavLink>
                    <img src={not} alt="not" width={"20px"} />
                  </NavLink>
                </div>
                <div className="send-input-last2">
                  <NavLink>
                    <img src={cup} alt="cup" width={"19px"} />
                  </NavLink>
                </div>
                <div className="send-input-last2">
                  <NavLink>
                    <img src={not} alt="not" width={"20px"} />
                  </NavLink>
                </div>
              </div>
              <div className="send-input-last-right">
                <div className="send-input-last2-1">
                  <NavLink>
                    <img src={not} alt="not" width={"20px"} />
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
