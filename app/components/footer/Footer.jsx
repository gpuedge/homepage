import { Link } from "@remix-run/react";
import windows_logo from "~/assets/windows_logo.png";
import linux from "~/assets/linux.png";
import github from "~/assets/github.png";
import discord from "~/assets/discord.png";
import github_footer from "~/assets/github_footer.png";
import LOGO1 from "~/assets/logo1.png";

const Footer = () => {
  return (
    <div className="footer ">
      <div className="web-align">
        <div className="footer-top">
          <div className="footer-list">
            <div className="footer-list-left">
              <img
                src={LOGO1}
                alt=""
                className="footer-logo"
              />
              <p className="address">4th Rock</p>
              <p className="address">S.T Bed, From the Sun</p>
              <p className="address">The Interwebs – 311</p>
              <p className="underline">Contact Us</p>
              <div className="social">
                {/*<a href="/" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/fb_icon_groww.1c94e937.svg"
                    alt=""
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/twitter_icon_groww.4cb988f6.svg"
                    alt=""
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/yt_icon_groww.ec96b677.svg"
                    alt=""
                  />
                </a>
                <a href="/" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/instagram_icon_groww.0454c1a2.svg"
                    alt=""
                  />
                </a>*/}
                <a href="https://www.linkedin.com/company/gpux-ai" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/linkedin_icon_groww.b15f8240.svg"
                    alt=""
                  />
                </a>
                {/*<a href="/" target="_blank">
                  <img
                    src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/telegram_icon_groww.f6524497.svg"
                    alt=""
                  />
                </a>*/}
                <a href="https://discord.gg/jjBSjSF" target="_blank">
                  <img src={discord} alt="" className="discord_icon" />
                </a>
                <a href="https://github.com/gpuedge/homepage" target="_blank">
                  <img src={github_footer} alt="" className="discord_icon" />
                </a>
              </div>
            </div>
            <div className="footer-list-right">
              <div className="footer-col-3">
                <div className="col-head">WORKLOADS</div>
                <p>Container</p>
                <p>AI</p>
                <p>Render</p>
                <p>Transcode</p>
                <p>Live Stream</p>
                <Link to="/blog/homomorphic_encryption" className="Link-tag">
                    <p>Homomorphic Encryption</p>
                </Link>
              </div>
              <div className="footer-col-3">
                <div className="col-head">GPUx</div>
                <p>About Us</p>
                <p>Current Round</p>
                <p>Blog</p>
                <p>Media & Press</p>
                <p>Help and Support</p>
              </div>
              <div className="footer-col-3">
                <div className="col-head">QUICK LINKS</div>
                <p>App</p>
                <p>Video Inspector</p>
                <p>Become a Farmer</p>
                <p>Documentation</p>
                <p>GPUx Academy</p>
                <p>Sitemap</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-company">
            ⓒ&nbsp; 2022 GPUx. All rights reserved, Built with{" "}
            <span className="heart">♥</span>
          </div>
          <div className="footer-store">
            <div className="button-footer-app">
              <a href="https://github.com/gpuedge/farm/releases" target="_blank">
                <img src={windows_logo} alt="" />
                <div>
                  <p>EARN ON</p>
                  <h1>WINDOWS 10</h1>
                </div>
              </a>
            </div>
            <div className="button-footer-app">
              <a href="https://github.com/gpuedge/farm/releases" target="_blank">
                <img src={linux} alt="" />
                <div>
                  <p>EARN ON</p>
                  <h1>LINUX OS</h1>
                </div>
              </a>
            </div>
            <div className="button-footer-app">
              <a href="https://github.com/gpuedge" target="_blank">
                <img src={github} alt="" />
                <div>
                  <p>GET IT ON</p>
                  <h1>GITHUB</h1>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
