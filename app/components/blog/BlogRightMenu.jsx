import { Link } from "@remix-run/react";

const BlogRightMenu = () => {
  return (
      <div className="blog-container-right">
        <div className="blog-container_card">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/loggedOutStateImage.f28263ce.svg"
            alt=""
          />
          <p className="container-card-heading">Building an AI App?</p>
          <p className="container-card-para">
            Contact us for information to get started
          </p>
          <button><a style={{color: "inherit", textDecoration: "inherit"}}>JOIN DISCORD</a></button>
        </div>
        {/*<div className="blog-container_related">
          <p className="container-related-heading">Check out other Articles</p>
          <Link className="linkk" to="/blog/homomorphic_encryption">
            <p className="container-related-work">June 26, 2022 - Homomorphic Encryption</p>
          </Link>{" "}
          <Link className="linkk" to="/blog/ai">
            <p className="container-related-work">May 30, 2022 - AI Distributed Learning</p>
          </Link>{" "}
          <Link className="linkk" to="/blog/render">
            <p className="container-related-work">May 23, 2022 - Blender Render</p>
          </Link>{" "}
          <Link className="linkk" to="/blog/transcode">
            <p className="container-related-work">May 16, 2022 - Transcode Video</p>
          </Link>{" "}
          <Link className="linkk" to="/blog/live">
            <p className="container-related-work">May 9, 2022 - Live Streaming</p>
          </Link>
        </div>*/}
      </div>
  );
};

export default BlogRightMenu;
