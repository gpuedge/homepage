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
              <p className="address">GPUX Inc.</p>
              <p className="address">88 Queens Quay W, Suite 2500</p>
              <p className="address">Toronto, Canada</p>
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
                <a href="https://github.com/gpuedge" target="_blank">
                  <img src={github_footer} alt="" className="discord_icon" />
                </a>
              </div>
            </div>
            <div className="footer-list-right">
              <div className="footer-col-3">
                <div className="col-head">BLOG</div>
                <Link className="Link-tag" to="/blog/ai">
                  <p className="container-related-work">AI</p>
                </Link>
                <Link className="Link-tag" to="/blog/render">
                  <p className="container-related-work">Blender</p>
                </Link>
                <Link className="Link-tag" to="/blog/transcode">
                  <p className="container-related-work">Transcode</p>
                </Link>
                <Link className="Link-tag" to="/blog/live">
                  <p className="container-related-work">Live Streaming</p>
                </Link>
                <Link className="Link-tag" to="/blog/homomorphic_encryption">
                  <p className="container-related-work">Homomorphic Encryption</p>
                </Link>
              </div>
              <div className="footer-col-3">
                <div className="col-head">GPUX</div>
                <Link className="Link-tag" to="/how-to">
                  <p className="container-related-work">How To</p>
                </Link>
                <Link className="Link-tag" to="/blog/ai">
                  <p className="container-related-work">Blog</p>
                </Link>
                <Link className="Link-tag" to="/company">
                  <p className="container-related-work">Company</p>
                </Link>
              </div>
              <div className="footer-col-3">
                <div className="col-head">LINKS</div>
                {/*<p><a href="https://docs.gpux.ai/" target="_blank" rel="noreferrer" style={{ textDecoration: "inherit", color: "inherit" }}>Documentation</a></p>
                <p><a href="https://docs.gpux.ai/farm/welcome" target="_blank" rel="noreferrer" style={{ textDecoration: "inherit", color: "inherit" }}>Become a Host</a></p>*/}
                {/*<p>Build your App</p>*/}
                <p><a href="https://explorer.gpux.ai/" target="_blank" rel="noreferrer" style={{ textDecoration: "inherit", color: "inherit" }}>Explorer</a></p>
                {/*<p>GPUX University</p>
                <p>Video Inspector</p>*/}
              </div>
              <div className="footer-col-3">
                <div className="col-head">LEGAL</div>
                {/*<p>Disclaimer</p>*/}
                <Link className="Link-tag" to="/terms-of-service"><p className="container-related-work">Terms of Service</p></Link>
                <Link className="Link-tag" to="/privacy"><p className="container-related-work">Privacy Policy</p></Link>
                {/*<p>Cookie Policy</p>*/}
              </div> 
            </div>
          </div>
        </div>

        <div className="footer-line"></div>
        <div className="footer-bottom">
          <div className="footer-company">
            ⓒ&nbsp; 2021-2022 GPUx. All rights reserved, Built with{" "}
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
