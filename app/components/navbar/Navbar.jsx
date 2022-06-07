import React, { useState } from "react";
import github from "~/assets/github.png";
import LOGO1 from "~/assets/logo1.png";
import LOGO2 from "~/assets/logo2.png";
import Data from "./Data";
import NavbarBtn from "./NavbarBtn";
import { Link } from "@remix-run/react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);

  const [item, setItem] = useState(Data);
  const [text, setText] = useState("");
  const menuItems = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    });
    setItem(newItem);
  };
  const onChangeHandler = (text) => {
    let matches = [];
    if (text.length > 0) {
      matches = Data.filter((data) => {
        const regex = new RegExp(`${text}`, "gi");
        return data.title.match(regex);
      });
    }
    setItem(matches);
    setText(text);
  };
  //"https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
  return (
    <div className="navbar web-align">
      <div className="navbar-item">
        <Link to="/">
          <img src={Math.random() >= 0.88 ? LOGO1 : LOGO2} alt="" />
        </Link>
      </div>
      <div className="navbar-container">
        <div className="navbar-item">
          <div className="navbar-input-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              className="pos-rel se27SeIcon se27SeSearch"
            >
              <path d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
            </svg>
            <input
              type="text"
              className="navbar-search"
              placeholder="Find your node"
              onMouseEnter={() => setShowSuggest(true)}
              onChange={(e) => onChangeHandler(e.target.value)}
              value={text}
            />
            {showSuggest && (
              <div
                className="suggest-container"
                onMouseLeave={() => setShowSuggest(false)}
              >
                <div className="suggest-top">
                  <NavbarBtn
                    filterItem={filterItem}
                    setItem={setItem}
                    menuItems={menuItems}
                  />
                </div>
                <div className="suggest-bottom">
                  <div className="suggest-bottom_list">
                    {item.map((val) => (
                      <>
                        <div>
                          <p>
                            <a href={`${val.url}`} target="_blank">
                              {val.title}
                            </a>
                          </p>
                          <p>{val.price}</p>
                        </div>
                      </>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          <div>
            <div className="navbar-btn">
              <a href="https://node0.gpux.ai/" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  fill="white"
                  width="100%"
                >
                  <path d="M380.6 365.6C401.1 379.9 416 404.3 416 432C416 476.2 380.2 512 336 512C291.8 512 256 476.2 256 432C256 423.6 257.3 415.4 259.7 407.8L114.1 280.4C103.8 285.3 92.21 288 80 288C35.82 288 0 252.2 0 208C0 163.8 35.82 128 80 128C101.9 128 121.7 136.8 136.2 151.1L320 77.52C321.3 34.48 356.6 0 400 0C444.2 0 480 35.82 480 80C480 117.9 453.7 149.6 418.4 157.9L380.6 365.6zM156.3 232.2L301.9 359.6C306.9 357.3 312.1 355.4 317.6 354.1L355.4 146.4C351.2 143.6 347.4 140.4 343.8 136.9L159.1 210.5C159.7 218 158.5 225.3 156.3 232.2V232.2z" />
                </svg>
                <p>Node</p>
              </a>
            </div>
          </div>
          <div style={{paddingLeft: "3px"}}>
            <div className="navbar-btn">
              <a href="https://wallet.gpux.ai/" target="_blank">
                <p>👛</p>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="navbar-mobile-menu">
        {/*<div className="search-mobile">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="24"
            width="24"
            className="pos-rel se27SeIcon se27SeSearch"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
          </svg>
        </div>*/}
        <div className="menu-icon" onClick={() => setToggleMenu(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            height="27"
            width="27"
            className="rsl1IconClass"
          >
            <path d="M0 0h24v24H0z" fill="none"></path>
            <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"></path>
          </svg>
        </div>
        {toggleMenu && (
          <div className="mobile-menu-container">
            <div className="mobile-menu">
              <img
                onClick={() => setToggleMenu(false)}
                className="close-menu"
                src="https://img.icons8.com/material-outlined/24/000000/delete-sign.png"
              />
              <div className="mobile-menu-top">
                <div>
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/simple-investing.3475e2d1.svg"
                    alt=""
                  />
                </div>
                <div className="mobile-login-div">
                  <p>The GPU EDGE</p>
                  <div className="navbar-btn">
                    <a href="https://github.com/gpuedge">
                      <img src={github} width="25px" alt="" />
                      <p>Go to Github</p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mobile-menu-bottom">
                <div className="mobile-menu-item">
                  <a href="https://wallet.gpux.ai/" target="_blank">
                    <p>👛 Wallet</p>
                  </a>
                  <a href="https://node0.gpux.ai/" target="_blank">
                    <p>Visit Node 0</p>
                  </a>
                  <p>Placeholder 2</p>
                </div>
                <div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <p>Placeholder 11</p>
                  <p>Placeholder 12</p>
                </div>
                <div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <p>Placeholder 21</p>
                  <p>Help and Support</p>
                </div>
                <div className="mobile-divider"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
