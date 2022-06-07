import { motion } from "framer-motion";
import openai from "~/assets/openai.png";
import podman from "~/assets/podman.png";

const Header = () => {
  return (
    <div className="header web-align">
      <div className="left-header">
        <h1>
          Offload <span></span>
        </h1>
        <p>
          The power of a <b>supercomputer</b> in your hands.
        </p>
        <button onClick={() => document.getElementById("WORK_TYPES").scrollIntoView()}>
          Run your Job
        </button>
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
            <p>Run Containers</p>
          </a>
          <a>
            <img src={openai} width="49" height="49" alt="MF - Groww" />
            <p>Train AI</p>
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
            <p>Render Animation</p>
          </a>
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/fdHome.ba2c5441.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Transcode</p>
          </a>
        </div>
        <div className="valign-wrapper">
          <a>
            <img
              src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/ipoHome.b071ba94.svg"
              width="49"
              height="49"
              alt="MF - Groww"
            />
            <p>Live Streaming</p>
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
      </motion.div>
    </div>
  );
};

export default Header;
