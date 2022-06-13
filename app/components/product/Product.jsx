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
                <video className="ProductImg " autoPlay loop muted playsInline src={RL_AI_MP4} type="video/mp4" />
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
                  <Link to="/rendering" className="Link-tag">
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
                  <Link to="/video-transcoding" className="Link-tag">
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
                  <Link to="/machine-learning" className="Link-tag">
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
