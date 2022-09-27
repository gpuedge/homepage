import server2 from "~/assets/server2.svg";
import cpu from "~/assets/cpu.svg";
import { BsArrowRight } from "react-icons/bs";

const Showcase = () => {
  return (
    <div className="showcase web-align">
      <div className="showcase-row">
        <div className="showcase-top">
          <div className="showcase-top_left">
            <div className="MainText">Tier-4 Datacenter</div>
            <div className="MainText">OR Community</div>
            <div className="Para">
              Choose to run your workload in defense industry grade datacenters or across community nodes.
            </div>
            <div className="BotWrapper">
              <div className="valign-wrapper">
                <div>
                  <img
                    className="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/dash.a7e0c55c.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div className="botwrapper-head">Track your cluster</div>
                  <div className="botwrapper-para">
                    Keep track of your spend and utilization.
                  </div>
                </div>
              </div>
              <div className="valign-wrapper" style={{ marginTop: "40px" }}>
                <div>
                  <img
                    className="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/sync.3ac006aa.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div className="botwrapper-head">Built-In Storage</div>
                  <div className="botwrapper-para">
                    Use our built-in storage to make persisting data easy across pods.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-top_right">
            <div className="top-right_two">
              <div className="showcase_server" onClick={()=> window.location = "https://github.com/gpuedge/farm/releases"}>
                <img src={server2} alt="" />
                <div>
                  <p>Tier 4 Datacenter</p>
                  <BsArrowRight />
                </div>
              </div>
              {/* <div
                style={{ marginTop: "30px", backgroundColor: "#66e3c4" }}
                className="showcase_server"
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Linux</p>
                  <BsArrowRight />
                </div>
              </div> */}
            </div>
            <div className="top-right_one">
              <div
                style={{ backgroundColor: "#66e3c4" }}
                className="showcase_server"
                onClick={()=> window.location = "https://github.com/gpuedge/farm/releases"}
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Community</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase-bottom"></div>
      </div>
      <Showcase2 />
      <div className="showcase-banner">
        <div className="banner-left">
          <div className="heading">We’re with you.</div>
          <div className="para">
            Need a little more help? We’re happy to talk in person or
            via chat.
          </div>
          <div>
          <a href="https://discord.com/invite/jjBSjSF" target="_blank">
            <button>
              <p>
                Get In Touch
              </p>
            </button>
          </a>
          </div>
        </div>
        <div className="banner-right">
          {/*<img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/hns-support-img.c56178f0.png"
            alt=""
          />*/}
        </div>
      </div>
    </div>
  );
};

const Showcase2 = () => {
  return (
      <div className="showcase-row">
        <div className="showcase-top">
          <div className="showcase-top_left">
            <div className="MainText">Serverless Edge</div>
            <div className="Para">
              Run your video media, AI inference or live streaming application off our FaaS edge.
            </div>
            <div className="BotWrapper">
              <div className="valign-wrapper">
                <div>
                  <img
                    className="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/dash.a7e0c55c.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div className="botwrapper-head">Monetize Easily</div>
                  <div className="botwrapper-para">
                    Get your business up and running quickly.
                  </div>
                </div>
              </div>
              <div className="valign-wrapper" style={{ marginTop: "40px" }}>
                <div>
                  <img
                    className="BotImg"
                    src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/sync.3ac006aa.svg"
                    width="48"
                    height="48"
                    alt="img"
                  />
                </div>
                <div>
                  <div className="botwrapper-head">Syncronise Podded Training</div>
                  <div className="botwrapper-para">
                    Train your network or transcode video in a pod, then move the result to the FaaS edge.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-top_right">
            <div className="top-right_two">
              <div className="showcase_server" onClick={()=> window.location = "https://github.com/gpuedge/farm/releases"}>
                <img src={server2} alt="" />
                <div>
                  <p>Global Edge</p>
                  <BsArrowRight />
                </div>
              </div>
              {/* <div
                style={{ marginTop: "30px", backgroundColor: "#66e3c4" }}
                className="showcase_server"
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Linux</p>
                  <BsArrowRight />
                </div>
              </div> */}
            </div>
            <div className="top-right_one">
              <div
                style={{ backgroundColor: "#66e3c4" }}
                className="showcase_server"
                onClick={()=> window.location = "https://github.com/gpuedge/farm/releases"}
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Training Pod</p>
                  <BsArrowRight />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="showcase-bottom"></div>
      </div>
  );
};

export default Showcase;
