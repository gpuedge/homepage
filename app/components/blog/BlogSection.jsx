import React from "react";
import ai from "../../assets/aii.jpg";
import livee from "../../assets/livee.jpg";
import render from "../../assets/3199.jpg";
import transcoding from "../../assets/transcoding.jpg";
import { Link } from "@remix-run/react";
const blogSection = () => {
  return (
    <div className="blog web-align">
      <h1>Blog</h1>
      <div className="blog_section">
        <Link className="link blog_card" to="/blog/ai">
          <div className="blog_card_img">
            <img src={ai} alt="banner" />
          </div>
          <div className="blog_card_content">
            <span>May 30, 2022</span>
            <h3>AI with Distributed Learning</h3>
            <p>
              When building machine learning models, we often come across tasks
              that would be more efficient and effective if they could be
              parallelized.
            </p>
          </div>
        </Link>
        <Link className="link blog_card" to="/blog/homomorphic_encryption">
          <div className="blog_card_img">
            <img src={livee} alt="" />
          </div>
          <div className="blog_card_content">
            <span>June 26, 2022</span>
            <h3>Homomorphic Encryption for secure training</h3>
          </div>
        </Link>
        <Link className="link blog_card" to="/blog/render">
          <div className="blog_card_img">
            <img src={render} alt="" />
          </div>
          <div className="blog_card_content">
            <span>May 23, 2022</span>
            <h3>0% lost time</h3>
          </div>
        </Link>
        <Link className="link blog_card" to="/blog/transcode">
          <div className="blog_card_img">
            <img src={transcoding} alt="" />
          </div>
          <div className="blog_card_content">
            <span>May 16, 2022</span>
            <h3>Transcoding up to 1080p /w Video Delivery</h3>
          </div>
        </Link>
        <Link className=" link blog_card" to="/blog/live">
          <div className="blog_card_img">
            <img src={livee} alt="" />
          </div>
          <div className="blog_card_content">
            <span>May 9, 2022</span>
            <h3>Live Streaming with OBS+RTMP</h3>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default blogSection;
