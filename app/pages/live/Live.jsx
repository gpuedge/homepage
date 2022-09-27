import { Link } from "@remix-run/react";
import LIVE_IMG from "~/assets/livee.jpg";
import BlogRightMenu from "~/components/blog/BlogRightMenu";

export const meta = () => ({
  title: 'Live Streaming - RTMP',
  description: `
    Go live using OBS with RTMP on the GPUX Edge. Your goto live streaming network.
  `,
});

const Live = () => {
  return (
    <div className="blog-container web-align">
      <div className="blog-container-left">
        <div className="blog-container-wrapper">
          <h1 className="blog-title">Live Streaming with OBS+RTMP</h1>
          <span className="blog-small-text">🎥 Live</span>
          <img src={LIVE_IMG} alt="" />
          <hr />
          <h1>Introduction</h1>
          <p className="blog-desc">
            Live Stream to the GPUX Edge and deliver the same media to your viewers.
          </p>
          <h1>Live Stream</h1>
          <p className="blog-desc">
            Let GPUX Ingest your Live Stream RTMP with full OBS support. Then deliver it using the GPUX VDN to your viewers 
            with full HLS support or mp4 frames over websockets.
          </p>
          <h1>Video delivery network (VDN)</h1>
          <p className="blog-desc">
            The GPUX video delivery network provides live video media delivery for HLS players like hls.js or VLC.
            The VDN has free Egress!
          </p>
          <h1>4k and 4k 360 Live streaming</h1>
          <p className="blog-desc">
            Streaming resolutions over 4k like 360 video 60 fps, 3840x3840, is fully supported.
          </p>
          <h1>Conclusion</h1>
          <p className="blog-desc">
            Use GPUX to ingest your RTMP stream then allow your viewers to view it from the GPUX Video Delivery Network.
            Make your business model work with free EGRESS.
            <br></br>
            <br></br>
            Get started on <a href="https://gpux.ai/">GPUX</a> today!
          </p>
        </div>
      </div>
      <BlogRightMenu />
    </div>
  );
};

export default Live;
