import * as React from "react";
import { motion } from "framer-motion";
import openai from "~/assets/openai.png";
import podman from "~/assets/podman.png";
import { Link } from "@remix-run/react";
import DRAGON_SWORD from "~/assets/dragon_sword.jpg";
import FIREFIGHT from "~/assets/firefight.jpg";

const Header = () => {
  const [activeTab, setActiveTab] = React.useState("StableDiffusionXL");

  return (
    <div className="header web-align">
      <div className="left-header">
        <h1>
          Deploy 'AI' Fast <span></span>
        </h1>
        <p>
          Run Cloud <b>GPUs</b>
          <br />
          Run Serverless <b>Inference</b>
        </p>
        <div className="left-header-btns">
          <a
            href="https://app.gpux.ai/"
            style={{ textDecoration: "inherit", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
          >
            <button>Run GPUs 🏃</button>
          </a>
          <a
            href="https://calendly.com/gpux"
            style={{ textDecoration: "inherit", color: "inherit" }}
            target="_blank"
            rel="noreferrer"
          >
            <button style={{ color: "black", background: "white", border: "dotted" }}>Talk to a Founder ☎️</button>
          </a>
        </div>
      </div>
      <motion.div
        className="right-header"
        initial={{ y: "20px" }}
        animate={{ y: "0px" }}
        transition={{ duration: 1 }}
      >

  <div className="big-card">
    <div className="card-tabs">
      <button 
        className={`tablink ${activeTab === "StableDiffusionXL" ? "active" : ""}`} 
        onClick={() => setActiveTab("StableDiffusionXL")}
      >
        StableDiffusionXL
      </button>
      <button 
        className={`tablink ${activeTab === "SecondTab" ? "active" : ""}`} 
        onClick={() => setActiveTab("SecondTab")}
      >
        ESRGAN
      </button>
      <button 
        className={`tablink ${activeTab === "ThirdTab" ? "active" : ""}`} 
        onClick={() => setActiveTab("ThirdTab")}
        style={{visibility: "hidden"}}
      >
        WHISPER
      </button>
    </div>
    <div className="card-content">
      {activeTab === "StableDiffusionXL" && 
        <div id="StableDiffusionXL" className="tabcontent">
          <pre><code>curl https://i.gpux.ai/gpux/sdxl?prompt=sword</code></pre>
          <img src={DRAGON_SWORD} width="100%" />
        </div>}
      {activeTab === "SecondTab" && 
        <div id="SecondTab" className="tabcontent">
          <pre><code>curl https://i.gpux.ai/gpux/esrgan<br/>?image=https://storage.gpux.ai/firefight.png</code></pre>
          <img src={FIREFIGHT} width="100%" />
        </div>}
      {activeTab === "ThirdTab" && 
        <div id="ThirdTab" className="tabcontent">
          {/* Content for the third tab */}
          <p>ContentForThirdTab</p>
        </div>}
    </div>
  </div>

        {/*<div className="valign-wrapper">
          <a>
            <img src={podman} width="49" height="49" />
            <p>Deploy Containers</p>
          </a>
          <a>
            <img src={openai} width="49" height="49" />
            <p>Inference API</p>
          </a>
        </div>
        <div className="valign-wrapper">
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/optionHome.5e98a896.svg"
              width="49"
              height="49"
            />
            <p>Earn per Inference</p>
          </a>
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/usHome.fcb18f99.svg"
              width="49"
              height="49"
            />
            <p>Earn by Providing</p>
          </a>
        </div>
        <div className="valign-wrapper">
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/fdHome.ba2c5441.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Transcode</p>
          </a>
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/ipoHome.b071ba94.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Live Streaming</p>
          </a>
        </div>*/}
      </motion.div>
    </div>
  );
};

export default Header;
