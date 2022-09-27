import { Link } from "@remix-run/react";
import LIVE_IMG from "~/assets/livee.jpg";
import BlogRightMenu from "~/components/blog/BlogRightMenu";

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
          <span className="blog-small-text">🔒 Secure</span>
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
      <BlogRightMenu />
    </div>
  );
};

export default Live;
