import { Outlet } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";

import stylesAI from "~/pages/ai/ai.css";
import AI_IMG from "~/assets/aii.jpg";
import WALLETEMAIL from "~/assets/wallet_email.png";
import WALLETPKEY from "~/assets/wallet_pkey.png";
import WALLETPKEY2 from "~/assets/wallet_pkey2.png";
import WALLETCREDITS from "~/assets/wallet_credits.png";
import EXPLORER_POD_1 from "~/assets/explorer_pod_1.png";
import EXPLORER_POD_JUPYTER from "~/assets/explorer_pod_jupyter.png";

export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: stylesAI }
  ];
};

export const meta = () => ({
  title: 'GPUx - How To',
  description: `
    GPUX is a distributed supercomputer for anyone to access. 
    It can run dedicated server gpus, act as a render farm for rendering, act as a protein folding network,
    transcode video, or live stream video.
  `,
});

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}

export default function BlogRoute() {
  return (
    <>
        <Navbar />
        <ThePage />
        <Footer />
    </>
  );
}

function ThePage() {
  return (
    <div className="blog-container web-align">
      <div className="blog-container-left">
        <div className="blog-container-wrapper">
          <h1 className="blog-title">How to get started on GPUX</h1>
          <span className="blog-small-text">⚡Trending</span>
          <hr />
          <h1>1. Create a Wallet</h1>
          <p className="blog-desc">
            Payments are settled on the network using cryptographically signed transactions.
            <br/> Deposits to the wallet are done using Stripe. 
            <br />By registering today you will receive $1 for free. 
            <br/><br/>Go to <a href="https://wallet.gpux.ai/" target="_blank">https://wallet.gpux.ai/</a>
            <br/>Using email authentication for ease of use.
            <img src={WALLETEMAIL} alt="" />
            <br/>
            <br/>Use Private Key authentication and save your key for advanced usage.
            <img src={WALLETPKEY} alt="" />
            <br/>Your private key is visible from the topright menu inside the wallet. Make a offline backup of it.
            <img src={WALLETPKEY2} alt="" />
          </p>

          <h1>2. Add Balance</h1>
          <p className="blog-desc">
            The wallet has a Stripe checkout, choose how many credits to purchase and checkout. 
            <br/>Contact us if you want to pay with another method like WechatPay or crypto (DAI,USDC,BTC,ETH,SOL,NEAR).
            <img src={WALLETCREDITS} alt="" />
          </p>

          <h1>3. Run NVIDIA-SMI</h1>
          <p className="blog-desc">
            Hosts (or nodes) are individual entities on the network which are herded together using an explorer.
            <br/><br/>Go to <a href="https://explorer.gpux.ai/" target="_blank">https://explorer.gpux.ai/</a> and click Pod.
            <br/>The default values are set to print nvidia-smi output.
            <br/>Click [Run!]
            <br/>Click the [📜 Log] button to see the output
            <br/>
            <img src={EXPLORER_POD_1} alt="" />
          </p>

          <h1>3. Run Jupyter Notebook</h1>
          <p className="blog-desc">
            Port Forwarding is done using subdomain addressing. 
            <br/>Select template [Jupyter Notebook].
            <br/>Click the [🔌 8080] button to forward to the notebook
            <br/>
            <img src={EXPLORER_POD_JUPYTER} alt="" />
          </p>
        </div>
      </div>
    </div>
  );
}
