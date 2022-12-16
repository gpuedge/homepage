import { motion } from "framer-motion";
import openai from "~/assets/openai.png";
import podman from "~/assets/podman.png";
import { Link } from "@remix-run/react";

const Header = () => {
  return (
    <div className="header web-align">
      <div className="left-header">
        <h1>
          Deploy 'X' Fast <span></span>
        </h1>
        <p>
          Run anything <b>Dockerized</b>
          <br />
          Run autoscale <b>Inference</b>
          <br />
          (Limited Time: Free $3 for all new accounts)
        </p>
        <div className="left-header-btns">
          <a
            href="https://explorer.gpux.ai/"
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
        <div className="valign-wrapper">
          <a>
            <img src={podman} width="49" height="49" alt="MF - Groww" />
            <p>Deploy Containers</p>
          </a>
          <a>
            <img src={openai} width="49" height="49" alt="MF - Groww" />
            <p>Inference API</p>
          </a>
        </div>
        <div className="valign-wrapper">
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/optionHome.5e98a896.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Earn per Inference</p>
          </a>
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/usHome.fcb18f99.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Earn by Providing</p>
          </a>
        </div>
        {/*<div className="valign-wrapper">
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
