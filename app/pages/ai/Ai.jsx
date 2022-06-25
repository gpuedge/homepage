import { Link } from "@remix-run/react";
import AI_IMG from "~/assets/aii.jpg";

const Ai = () => {
  return (
    <div className="blog-container web-align">
      <div className="blog-container-left">
        <div className="blog-container-wrapper">
          <h1 className="blog-title">AI with Zero interruption</h1>
          <span className="blog-small-text">⚡Trending</span>
          <img src={AI_IMG} alt="" />
          <hr />
          <p className="blog-desc">
            Distributed learning for your neural net. Easily upload your dataset
            or run a graphical game + setup a RL environment. No spot
            interruption.
          </p>
          <p className="blog-desc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            sit, expedita possimus sed ea nesciunt esse, laudantium ipsa, eos
            qui fugit. Iste ullam, deserunt reiciendis dolorum dolore aut vitae
            sequi, quia, nobis tempore nam. Perspiciatis rem, excepturi
            corrupti, consectetur dolorem odio hic earum ullam, illum molestiae
            dignissimos velit inventore? Voluptates, deleniti. Possimus
            dignissimos adipisci provident consequuntur repellendus maiores!
            Accusamus quasi excepturi fugit perferendis vitae quis aliquid
            explicabo nostrum harum, optio nemo, porro, reprehenderit deserunt
            corporis ab fugiat beatae ad at laborum. Magnam, laboriosam tempora
            fugit adipisci veritatis, temporibus aliquid maxime quis natus eum
            ipsa rem dolore deserunt asperiores corporis doloribus?
          </p>
        </div>
      </div>
      <div className="blog-container-right">
        <div className="blog-container_card">
          <img
            src="https://assets-netstorage.groww.in/web-assets/billion_groww_desktop/prod/build/client/images/loggedOutStateImage.f28263ce.svg"
            alt=""
          />
          <p className="container-card-heading">Want to Earn?</p>
          <p className="container-card-para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            ipsum.
          </p>
          <button>GET STARTED</button>
        </div>
        <div className="blog-container_related">
          <p className="container-related-heading">Check out other Work</p>
          <Link className="linkk" to="../../blog/render">
            <p className="container-related-work">GPU Render</p>
          </Link>{" "}
          <Link className="linkk" to="../../blog/transcode">
            <p className="container-related-work">Transcode Video</p>
          </Link>{" "}
          <Link className="linkk" to="../../blog/live">
            <p className="container-related-work">Live Streaming</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Ai;
