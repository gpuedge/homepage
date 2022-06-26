import { Link } from "@remix-run/react";
import LIVE_IMG from "~/assets/livee.jpg";

export const meta = () => ({
  title: 'Homomorphic Encryption GPU',
  description: `
    Run your Homomorphic Encryption workload on our dedicated GPU Farm.
  `,
});

const Live = () => {
  return (
    <div className="blog-container web-align">
      <div className="blog-container-left">
        <div className="blog-container-wrapper">
          <h1 className="blog-title">Homomorphic Encryption for secure training</h1>
          <span className="blog-small-text">🎥 Live</span>
          <img src={LIVE_IMG} alt="" />
          <hr />
          <h1>Introduction</h1>
          <p className="blog-desc">
            Often we need to keep our training data and trained models private for compliance and as well as
            to preserve our companies secrets.
            <br/>
            <br/>
            For example in the field of healthcare we dont want our Cloud GPU providers to have our patients health care
            data stored cleartext in the server ram. A crafty system administrator 
            could always copy the data for themselves or leak it publically.
          </p>
          <h1>Train on Encrypted Data</h1>
          <p className="blog-desc">
            With Homomorphic Encryption we not only keep the training data encrypted at rest, we also train our
            model on fully encrypted data, creating a fully encrypted training circuit. No sensitive data can leak out
            to the node provider whos hardware we are using.
            <br/>
            <br/>
            Read more about NVIDIA Federated Learning here plus check the GitHub example at the bottom of the article: 
            <a target="_blank" href="https://developer.nvidia.com/blog/federated-learning-with-homomorphic-encryption/">
                https://developer.nvidia.com/blog/federated-learning-with-homomorphic-encryption/
            </a>
          </p>
          <h1>Conclusion</h1>
          <p className="blog-desc">
            Take advantage of the low cost of GPUS on GPUX to train your neural network while meeting your
            compliance guidelines.
            <br></br>
            <br></br>
            Get started on <a href="https://gpux.ai/">GPUX</a> today!
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
            Run a Node
          </p>
          <button><a target="_blank" href="https://docs.gpux.ai/farm/farming/" style={{color: "inherit", textDecoration: "inherit"}}>GET STARTED</a></button>
        </div>
        <div className="blog-container_related">
          <p className="container-related-heading">Check out other Jobs</p>
          <Link className="linkk" to="../../blog/ai">
            <p className="container-related-work">Train AI</p>
          </Link>{" "}
          <Link className="linkk" to="../../blog/render">
            <p className="container-related-work">Blender Render</p>
          </Link>{" "}
          <Link className="linkk" to="../../blog/transcode">
            <p className="container-related-work">Transcode Video</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Live;
