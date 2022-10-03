// import server2 from "~/assets/server2.svg";
import server2 from "~/assets/datacenter.png";
import server3 from "~/assets/serverroom.png";
import chat from "~/assets/chat.svg";
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
              Choose to run your workload in defense industry grade datacenters
              or across community nodes.
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
                    Use our built-in storage to make persisting data easy across
                    pods.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="showcase-top_right">
            <div className="top-right_two">
              <div
                className="showcase_server"
                // onClick={() =>
                //   (window.location = "https://github.com/gpuedge/farm/releases")
                // }
              >
                <img src={server3} alt="" />
                <div>
                  <a
                    href="https://github.com/gpuedge/farm/releases"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Tier 4 Datacenter <BsArrowRight />
                  </a>
                  <a
                    href="https://github.com/gpuedge/farm/releases"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Community <BsArrowRight />
                  </a>
                  {/* <BsArrowRight /> */}
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
            {/* <div className="top-right_one">
              <div
                // style={{ backgroundColor: "#66e3c4" }}
                className="showcase_server"
                onClick={() =>
                  (window.location = "https://github.com/gpuedge/farm/releases")
                }
              >
                <img src={cpu} alt="" />
                <div>
                  <p>Community</p>
                  <BsArrowRight />
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <div className="showcase-bottom"></div>
      </div>
      <Showcase2 />
      <div className="showcase-banner">
        <div className="banner-left">
          <div className="heading">We’re with you.</div>
          <div className="para">
            Need a little more help? We’re happy to talk in person or via chat.
          </div>
          <div>
            <a
              href="https://discord.com/invite/jjBSjSF"
              target="_blank"
              rel="noreferrer"
            >
              <button>
                <p>Get In Touch</p>
              </button>
            </a>
          </div>
        </div>
        <div className="banner-right">
          <img src={chat} alt="" />
        </div>
      </div>
    </div>
  );
};

const Showcase2 = () => {
  return (
    <div className="showcase-row showcase-row2">
      <div className="showcase-top showcase-top2">
        <div className="showcase-top_right">
          <div className="top-right_two" style={{ backgroundColor: "#EEF0FF" }}>
            <div
              className="showcase_server"
              // onClick={() =>
              //   (window.location = "https://github.com/gpuedge/farm/releases")
              // }
            >
              <img src={server2} alt="" />
              <div>
                <a
                  href="https://github.com/gpuedge/farm/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  Global Edge <BsArrowRight />
                </a>
                <a
                  href="https://github.com/gpuedge/farm/releases"
                  target="_blank"
                  rel="noreferrer"
                >
                  Training Pod <BsArrowRight />
                </a>
                {/* <BsArrowRight /> */}
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
          {/* <div className="top-right_one">
            <div
              // style={{ backgroundColor: "#66e3c4" }}
              className="showcase_server"
              onClick={() =>
                (window.location = "https://github.com/gpuedge/farm/releases")
              }
            >
              <img src={cpu} alt="" />
              <div>
                <p>Training Pod</p>
                <BsArrowRight />
              </div>
            </div>
          </div> */}
        </div>
        <div className="showcase-top_left">
          <div className="MainText">Serverless Edge</div>
          <div className="Para">
            Run your video media, AI inference or live streaming application off
            our FaaS edge.
          </div>
          <div className="BotWrapper">
            <div className="valign-wrapper">
              {/* <div>
                <img
                  className="BotImg"
                  src="//assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/dash.a7e0c55c.svg"
                  width="48"
                  height="48"
                  alt="img"
                />
              </div> */}
              <div class="monetize">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 17 13"
                  height="32"
                  width="32"
                  class="mgf12Icon"
                >
                  <g fill="none" fill-rule="evenodd">
                    <path d="M-2-4h20v20H-2z"></path>
                    <path
                      fill="#FFF"
                      d="M1.684 0h11.032c.753 0 1.364.619 1.364 1.382v9.586c0 .763-.61 1.382-1.364 1.382H1.684A1.373 1.373 0 01.32 10.968V1.382C.32.62.93 0 1.684 0z"
                    ></path>
                    <path
                      fill="#00D09C"
                      d="M1.364 0h12.632c.753 0 1.364.652 1.364 1.455v10.09c0 .803-.61 1.455-1.364 1.455H1.364C.61 13 0 12.348 0 11.545V1.455C0 .652.61 0 1.364 0z"
                    ></path>
                    <path
                      fill="#FFF"
                      stroke="#00D09C"
                      d="M11.688 4.55h3.504a.8.8 0 01.808.79v2.32a.8.8 0 01-.808.79h-3.504a.8.8 0 01-.808-.79V5.34a.8.8 0 01.808-.79z"
                    ></path>
                    <path
                      fill="#FFF"
                      fill-rule="nonzero"
                      d="M6.61 2.6c.051 0 .102.014.146.04.133.08.175.249.094.379l-1.625 2.6h1.533c.045 0 .088.01.128.03l.055.036a.271.271 0 01.032.388l-3.26 3.74a.163.163 0 01-.17.047.161.161 0 01-.104-.202l.897-2.781h-.585l-.03-.001-.03-.005a.275.275 0 01-.215-.327l.79-3.582a.469.469 0 01.46-.362z"
                    ></path>
                  </g>
                </svg>
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
                <div className="botwrapper-head">
                  Syncronise Podded Training
                </div>
                <div className="botwrapper-para">
                  Train your network or transcode video in a pod, then move the
                  result to the FaaS edge.
                </div>
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
