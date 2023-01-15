import { Link } from "@remix-run/react";
import TRANSCODE from "~/assets/transcoding.jpg";
import BlogRightMenu from "~/components/blog/BlogRightMenu";

export const meta = () => ({
  title: 'Video Transcode to HLS with Video Delivery',
  description: `
    Video Transcode to multiple outputs in HLS format plus video delivery.
  `,
});

const Transcode = () => {
  return (
    <div className="blog-container-wrapper">
      <h1 className="blog-title">Transcoding up to 1080p /w Video Delivery</h1>
      <span className="blog-small-text">⚡Trending</span>
      <img src={TRANSCODE} alt="" />
      <hr />
      <h1>Introduction</h1>
      <p className="blog-desc">
        Transcode your content into HLS and other formats plus deliver it.
      </p>
      <h1>Transcode</h1>
      <p className="blog-desc">
            Video transcode is the process of taking high bitrate and high resolution source video and producing
            lower resolution versions that can be played on weaker devices and networks. Sending an original, 
            high quality video meant for a 47 inch TV that is 3GB in size to a mobile phone will not only drain
            the phones data plan, it will also have a needlessly large resolution that will not be noticed on the 
            small device screen. Thus we transcode the video to a lower resolution and bitrate without sacrificing
            viewing quality on the smaller viewport device.
      </p>
      <h1>Video delivery network (VDN)</h1>
      <p className="blog-desc">
            A video delivery network provides video media delivery such as HLS video to consumers. It can often be used
            interchangeably with the term CDN. A key difference being a VDN is optimized for things like Accept-Bytes to seek
            in a video file while a CDN might not have similar functionality.
            <br/>
            <br/>
        GPUX provides its own VDN layer with free Egress!
      </p>
      <h1>Adaptive bitrate streaming</h1>
      <p className="blog-desc">
            Adaptive bitrate streaming allows resolutions to change on the fly to automatically find the best possible
            bitrate for the consuming device.  Using technology like DASH or the far more supported HLS.
            <br/>
            <br/>
        GPUX fully supports HLS.
      </p>
      <h1>Conclusion</h1>
      <p className="blog-desc">
            Use GPUX to transcode your high quality source video into adaptive bitrate HLS content. Then deliver
            the content with no EGRESS charges to your viewers using the GPUX Video Delivery Network.
        <br></br>
        <br></br>
        Get started on <a href="https://gpux.ai/">GPUX</a> today!
      </p>
    </div>
  );
};

export default Transcode;
