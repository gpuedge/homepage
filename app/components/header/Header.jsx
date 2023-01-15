import { motion } from "framer-motion";
import openai from "~/assets/openai.png";
import podman from "~/assets/podman.png";
import midjourney from "~/assets/midjourney.png";
import arrow from "~/assets/up-right-arrow.png";
import dice from "~/assets/dice.png";
import { Link } from "@remix-run/react";
import { promptArray } from "./prompt";
import { useState } from "react";

const Header = () => {
  const [promptImg, setPromptImg] = useState();
  const [rotateDice, setRotateDice] = useState(0);
  const fetchPrompt = async () => {
    // remove comma from prompt
    const prompt = promptArray[
      parseInt(Math.random() * promptArray.length)
    ].replace(/,/g, "");
    console.log(prompt);
    const response = await fetch(
      "https://explorer.gpux.ai/api/inference/gpux/sd15?return_grid=true&image_count=1&prompt=",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      }
    );
    const data = await response.json();
    console.log(data);
    setPromptImg(data[0].base64);
  };

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
            <button
              style={{ color: "black", background: "white", border: "dotted" }}
            >
              Talk to a Founder ☎️
            </button>
          </a>
        </div>
      </div>
      <motion.div
        className="right-header"
        initial={{ y: "20px" }}
        animate={{ y: "0px" }}
        transition={{ duration: 1 }}
      >
        <img src={arrow} alt="arrow" className="arrow" />
        <motion.img
          initial={{ rotate: 0 }}
          animate={{ rotate: rotateDice }}
          transition={{ duration: 1 }}
          onClick={() => {
            setRotateDice(rotateDice + 360);
            fetchPrompt();
          }}
          src={dice}
          alt="dice"
          className="dice"
        />
        <motion.img
          src={promptImg ? `data:image/png;base64,${promptImg}` : midjourney}
          width="300"
          alt="Ai Art"
          className="ai-art"
        />

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
