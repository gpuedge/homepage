import React, { useState, useEffect } from "react";
import github from "~/assets/github.png";
import LOGO1 from "~/assets/logo1.png";
import LOGO2 from "~/assets/logo2.png";
import Data from "./Data";
import NavbarBtn from "./NavbarBtn";
import { Link } from "@remix-run/react";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [showSuggest, setShowSuggest] = useState(false);

  const [text, setText] = useState("");

  //"https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/logo-dark-groww.83f43714.svg"
  return (
    <>
    <div className="news-banner" style={{color: "#fde590"}}>
      <p>🚀 April 20th, 2023 - 
        <a href="https://blog.cloudflare.com/launchpad-fall-22/" target="_blank" rel="noopener noreferrer">
          <span className="news-banner-link">V2 is launched!</span>
        </a><span className="news-banner-long"> 1s starts from cold! </span> 🎉
      </p>
    </div>
    <div className="navbar web-align">
      <div className="navbar-item">
        <Link to="/">
          <img src={Math.random() >= 0.88 ? LOGO1 : LOGO2} alt="" />
        </Link>
      </div>
      <div className="navbar-container">
        <div className="navbar-item">
          {/*<div style={{ paddingLeft: "3px" }}>
            <Link to="/how-to" className="Link-tag">
              <div
                className="navbar-btn"
                style={{ color: "black", background: "white" }}
              >
                <p>FAQ ❓</p>
              </div>
            </Link>
          </div>*/}

          <div style={{ paddingLeft: "3px" }}>
            <Link to="/blog/sdxl_50_faster" className="Link-tag">
              <div
                className="navbar-btn"
                style={{ color: "black", background: "white" }}
              >
                <p>Blog</p>
              </div>
            </Link>
          </div>

          {/*<div style={{ paddingLeft: "3px" }}>
            <Link to="/dedicated-server" className="Link-tag">
              <div
                className="navbar-btn"
                style={{ color: "black", background: "white" }}
              >
                <p>Dedicated Server</p>
              </div>
            </Link>
          </div>*/}

          {/*<div style={{ paddingLeft: "3px" }}>
            <Link to="/buy-hardware" className="Link-tag">
              <div
                className="navbar-btn"
                style={{ color: "black", background: "white" }}
              >
                <p>Buy Hardware</p>
              </div>
            </Link>
          </div>*/}

          {/*<div style={{paddingLeft: "3px"}}>
            <div className="navbar-btn" style={{color: "black", background: "white"}}>
              <Link to="/company" className="Link-tag">
                <p>Company</p>
              </Link>
            </div>
          </div>*/}
          {/*<div style={{ paddingLeft: "9px" }}>
            <a
              href="https://app.gpux.ai/"
              target="_blank"
              rel="noreferrer"
              className="Link-tag"
            >
              <div className="navbar-btn">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="white"
                    width="100%"
                  >
                    <path d="M380.6 365.6C401.1 379.9 416 404.3 416 432C416 476.2 380.2 512 336 512C291.8 512 256 476.2 256 432C256 423.6 257.3 415.4 259.7 407.8L114.1 280.4C103.8 285.3 92.21 288 80 288C35.82 288 0 252.2 0 208C0 163.8 35.82 128 80 128C101.9 128 121.7 136.8 136.2 151.1L320 77.52C321.3 34.48 356.6 0 400 0C444.2 0 480 35.82 480 80C480 117.9 453.7 149.6 418.4 157.9L380.6 365.6zM156.3 232.2L301.9 359.6C306.9 357.3 312.1 355.4 317.6 354.1L355.4 146.4C351.2 143.6 347.4 140.4 343.8 136.9L159.1 210.5C159.7 218 158.5 225.3 156.3 232.2V232.2z" />
                  </svg>
                  <p>App</p>
                </div>
              </div>
            </a>
          </div>*/}

          <div style={{ paddingLeft: "3px" }}>
            <a
              href="https://discord.com/invite/jjBSjSF"
              target="_blank"
              rel="noreferrer"
              className="Link-tag"
            >
              <div className="navbar-btn" style={{ minHeight: "40px" }}>
                <div>
                  <svg
                    width="100%"
                    viewBox="0 -58.5 256 256"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    preserveAspectRatio="xMidYMid"
                  >
                    <g>
                      <path
                        d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                        fill="#5865F2"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/*<div style={{ paddingLeft: "3px" }}>
            <a
              href="https://docs.gpux.ai/"
              target="_blank"
              className="Link-tag"
              rel="noreferrer"
            >
              <div className="navbar-btn">
                <p>📜</p>
              </div>
            </a>
          </div>

          <div style={{ paddingLeft: "3px" }}>
            <a
              href="https://wallet.gpux.ai/"
              target="_blank"
              rel="noreferrer"
              className="Link-tag"
            >
              <div className="navbar-btn">
                <p>👛</p>
              </div>
            </a>
          </div>*/}
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
                alt="close"
              />
              <div className="mobile-menu-top">
                <div>
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/nbg_mobile/prod/build/client/images/simple-investing.3475e2d1.svg"
                    alt=""
                  />
                </div>
                <div className="mobile-login-div">
                  <p>GPUX</p>
                  {/*<div className="navbar-btn">
                    <a href="https://app.gpux.ai" target="_blank">
                      <p>Go to App</p>
                    </a>
                  </div>*/}
                </div>
              </div>
              <div className="mobile-menu-bottom">
                <div className="mobile-menu-item">

                  {/*<a href="https://docs.gpux.ai/" target="_blank" style={{textDecoration: "none"}}>
                    <p>📜 Docs</p>
                  </a>
                  <a href="https://wallet.gpux.ai/" target="_blank" style={{textDecoration: "none"}}>
                    <p>👛 Wallet</p>
                  </a>
                  <Link to="/how-to" className="Link-tag">
                    <div style={{textDecoration: "none"}}>
                      <p>❓ FAQ</p>
                    </div>
                  </Link>*/}
                  <Link to="/blog/sdxl_50_faster" className="Link-tag">
                    <div style={{textDecoration: "none"}}>
                      <p>Blog</p>
                    </div>
                  </Link>
                  {/*<Link to="/dedicated-server" className="Link-tag">
                    <div style={{textDecoration: "none"}}>
                      <p>Dedicated Server</p>
                    </div>
                  </Link>*/}
                  {/*<Link to="/buy-hardware" className="Link-tag">
                    <div style={{textDecoration: "none"}}>
                      <p>Buy Hardware</p>
                    </div>
                  </Link>*/}
                </div>
                {/*<div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <p>Placeholder 11</p>
                  <p>Placeholder 12</p>
                </div>*/}
                <div className="mobile-divider"></div>
                <div className="mobile-menu-item">
                  <a
                    href="https://discord.com/invite/jjBSjSF"
                    target="_blank"
                    style={{ textDecoration: "none" }}
                  >
                    <p>Help and Support</p>
                  </a>
                </div>
                <div className="mobile-divider"></div>
              </div>
            </div>
          </div>
        )}
      </div>
      </div>
   </>
  );
};

export default Navbar;
