import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
//import RL_AI from "~/assets/rl_ai.gif";
import RL_AI_MP4 from "~/assets/rl.mp4";
import RENDER_FARM from "~/assets/render_farm.png";
import TRANSCODE from "~/assets/transcode.jpeg";
import LIVE from "~/assets/live.jpg";
import { Link } from "@remix-run/react";

import { motion } from "framer-motion";
import openai from "~/assets/openai.png";
import podman from "~/assets/podman.png";
import SDLOGO from "~/assets/sd_logo.jpg";
import BLENDERLOGO from "~/assets/blender_icon_256x256.png";
import JUPYTERLOGO from "~/assets/jupyter2.png";
import MIDJOURNEY from "~/assets/midjourney.png";
import MICROPHONE from "~/assets/microphone.png";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Product = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="product_section web-align">
        <h2 className="product_heading">Price per Hour</h2>
        <div className="tab-container">
          <table>
            <tr>
              <th>Card Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>RTX3060</td>
              <td>$0.10</td>
            </tr>
            <tr>
              <td>RTX3090</td>
              <td>$0.37</td>
            </tr>
            <tr>
              <td>A4000</td>
              <td>$0.33</td>
            </tr>
            <tr>
              <td>A100</td>
              <td>$1.30</td>
            </tr>
          </table>

          <table>
            <tr>
              <th>Resource Name</th>
              <th>Price</th>
            </tr>
            <tr>
              <td>1 CPU</td>
              <td>$0.0063</td>
            </tr>
            <tr>
              <td>1GB Ram</td>
              <td>$0.0014</td>
            </tr>
            <tr>
              <td>GPUX Persistant S3 Storage (1GB)</td>
              <td>$0.0000208 ($0.015 per month)</td>
            </tr>
            <tr>
              <td>Storage Local</td>
              <td>$0.00 (Free)</td>
            </tr>
            <tr>
              <td>Bandwidth</td>
              <td>$0.00 (Free)</td>
            </tr>
          </table>
        </div>
      </div>

      <div className="pod-template" style={{ marginTop: "80px" }}>
        <div className="header web-align">
          <div className="left-header">
            <h1>
              Run Docker <span></span>
            </h1>
            <p>
              Use public DockerHub or push templates to our <b>private</b>{" "}
              storage.
            </p>
          </div>
          <motion.div
            className="right-header"
            initial={{ y: "20px" }}
            animate={{ y: "0px" }}
            transition={{ duration: 1 }}
          >
            <div className="valign-wrapper">
              <a>
                <img src={SDLOGO} width="49" height="49" alt="MF - Groww" />
                <p>Stable Diffusion</p>
              </a>
              <a>
                <img
                  src={BLENDERLOGO}
                  width="49"
                  height="49"
                  alt="MF - Groww"
                />
                <p>Blender</p>
              </a>
            </div>
            <div className="valign-wrapper">
              <a>
                <img
                  src={JUPYTERLOGO}
                  width="49"
                  height="49"
                  alt="MF - Groww"
                />
                <p>Jupyter Notebook</p>
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pod-template pod2" style={{ marginBottom: "100px" }}>
        <div className="header web-align">
          <motion.div
            className="right-header"
            initial={{ y: "20px" }}
            animate={{ y: "0px" }}
            transition={{ duration: 1 }}
          >
            <div className="valign-wrapper">
              <a>
                <img src={SDLOGO} width="49" height="49" alt="MF - Groww" />
                <p>SDiffusion v1.5</p>
              </a>
              <a>
                <img
                  src={MIDJOURNEY}
                  width="49"
                  height="49"
                  alt="MF - Groww"
                />
                <p>Midjourney v3</p>
              </a>
            </div>
            <div className="valign-wrapper">
              <a>
                <img
                  src={MICROPHONE}
                  width="49"
                  height="49"
                  alt="MF - Groww"
                />
                <p>Whisper</p>
              </a>
            </div>
          </motion.div>
          <div className="left-header">
            <h1>
              Run Inference <span></span>
            </h1>
            <p>
              Deploy <b>private</b> model or earn per <b>public</b> request.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const Product2 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="product_section web-align">
      <div className="product_chip">
        <span id="WORK_TYPES" className="">
          WORK TYPES
        </span>
      </div>
      <h2 className="product_heading">Your workload. Your choice.</h2>
      <div className="tab-container">
        <Box sx={{ width: "100%" }}>
          <Box>
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab
                sx={{ borderBottom: "#00d09c" }}
                label={`AI`}
                {...a11yProps(0)}
              />
              <Tab label="Render" {...a11yProps(1)} />
              <Tab label="Transcode" {...a11yProps(2)} />
              <Tab label="Live" {...a11yProps(3)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <div className="valign-wrapper">
              <div>
                {/*<img className="ProductImg " src={RL_AI} alt="stocks" />*/}
                <video
                  className="ProductImg "
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={RL_AI_MP4}
                  type="video/mp4"
                />
              </div>
              <div className="tab-right">
                <div>
                  <div className="MainText">
                    Zero<span className="MainPara">interruption</span>
                  </div>
                  <div className="Para">
                    Distributed learning for your neural net. Easily upload your
                    dataset or run a graphical game + setup a RL environment. No
                    spot interruption.
                  </div>
                  <Link to="/blog/ai" className="Link-tag">
                    <button className="product-btn">Explore AI</button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <div className="valign-wrapper">
              <img
                className="ProductImg "
                src={RENDER_FARM}
                alt="stocks"
                style={{ width: "360px" }}
              />
              <div className="tab-right">
                <div>
                  <div className="MainText">
                    0%<span className="MainPara">lost time</span>
                  </div>
                  <div className="Para">
                    Cluster render your Blender, Maya and other work loads.
                    Parallelize up to 1000 GPUs. Your own on-demand render farm.
                  </div>
                  <Link to="/blog/render" className="Link-tag">
                    <button className="product-btn">Explore Rendering</button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="valign-wrapper">
              <img
                className="ProductImg "
                src={TRANSCODE}
                alt="stocks"
                style={{ width: "360px" }}
              />
              <div className="tab-right">
                <div>
                  <div className="MainText">
                    Free<span className="MainPara">up to 1080p</span>
                  </div>
                  <div className="Para">
                    Transcode your content into HLS and other formats.
                  </div>
                  <Link to="/blog/transcode" className="Link-tag">
                    <button className="product-btn">Explore Transcode</button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3}>
            <div className="valign-wrapper">
              <img
                className="ProductImg "
                src={LIVE}
                alt="stocks"
                style={{ width: "360px" }}
              />
              <div className="tab-right">
                <div>
                  <div className="MainText">
                    100%<span className="MainPara">uptime</span>
                  </div>
                  <div className="Para">
                    Offload your live streams to our edge and transcode + serve
                    media directly.
                  </div>
                  <Link to="/blog/live" className="Link-tag">
                    <button className="product-btn">
                      Explore Live Streaming
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </TabPanel>
        </Box>
      </div>
      <div className="view-product">
        <span>View all product</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          height="22"
          width="22"
          className="pos-rel vm44Arrow"
        >
          <path d="M0 0h24v24H0z" fill="none"></path>
          <path d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path>
        </svg>
      </div>
    </div>
  );
};

export default Product;
