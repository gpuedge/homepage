import { Outlet } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import stylesAI from "~/pages/ai/ai.css";
import AI_IMG from "~/assets/aii.jpg";
/* import WALLETEMAIL from "~/assets/wallet_email.png";
import WALLETPKEY from "~/assets/wallet_pkey.png";
import WALLETPKEY2 from "~/assets/wallet_pkey2.png";

import WALLETCREDITS from "~/assets/wallet_credits.png"; */

import WALLETPKEY1 from "~/assets/app_ss/wallet_pkey1.jpg";
import WALLETPKEY2 from "~/assets/app_ss/wallet_pkey2.jpg";
import WALLETPKEY3 from "~/assets/app_ss/wallet_pkey3.jpg";
import WALLETPKEY4 from "~/assets/app_ss/wallet_pkey4.png";
import WALLETPKEY5 from "~/assets/app_ss/wallet_pkey5.png";
import WALLETPKEY6 from "~/assets/app_ss/wallet_pkey6.png";
import WALLETEMAIL1 from "~/assets/app_ss/wallet_email1.jpg";
import WALLETEMAIL2 from "~/assets/app_ss/wallet_email2.jpg";
import WALLETEMAIL3 from "~/assets/app_ss/wallet_email3.jpg";
import WALLETCREDITS1 from "~/assets/app_ss/wallet_credit1.png";
import WALLETCREDITS2 from "~/assets/app_ss/wallet_credit2.png";
import WALLETCREDITS3 from "~/assets/app_ss/wallet_credit3.png";

import EXPLORERPOD from "~/assets/explorer_pod_1.png";
import EXPLORERHUPYTER from "~/assets/explorer_pod_jupyter.png";
export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: stylesAI },
  ];
};

export const meta = () => ({
  title: "GPUx - How To",
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

          <h1>Create a Wallet</h1>
          <div>
            <p className="blog-tips">
              Payments are settled on the network using cryptographically signed
              transactions.
              <br /> Deposits to the wallet are done using Stripe.
              <br />
              By registering today you will receive $10 for free.{" "}
            </p>
            <br />
            <p className="blog-desc">
              Create a wallet using <b>Email</b>:
              <ol>
                <li>
                  Go to{" "}
                  <a
                    href="https://wallet.gpux.ai/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    GPUX Wallet Page
                  </a>
                </li>
                <li>Using email authentication for ease of use.</li>
              </ol>
            </p>

            <div className="blog-ss">
              <img src={WALLETEMAIL1} alt="" />
              <img src={WALLETEMAIL2} alt="" />
              <img src={WALLETEMAIL3} alt="" />
            </div>
          </div>
          <br />
          <br />
          <div>
            <p className="blog-desc">
              Create a wallet using <b>Private Key</b>:
              <ol>
                <li>
                  {" "}
                  Use Private Key authentication and save your key for advanced
                  usage.
                </li>
                <li>Click on Generate Private Key</li>
              </ol>
            </p>
            <div className="blog-ss">
              <img src={WALLETPKEY1} alt="" />
              <img src={WALLETPKEY2} alt="" />
              <img src={WALLETPKEY3} alt="" />
            </div>
          </div>
          <br />
          <div>
            <p className="blog-desc">
              Check your <b>Private Key:</b>
              <ul>
                <li>
                  Your private key is visible from the topright menu inside the
                  wallet.
                </li>
              </ul>
              <p className="blog-tips">
                Make a offline backup of it to access your wallet later
              </p>
            </p>
            <div className="blog-ss">
              <img src={WALLETPKEY4} alt="" />
              <img src={WALLETPKEY5} alt="" />
              <img src={WALLETPKEY6} alt="" />
            </div>
          </div>
          <br />
          <h1>Add Balance</h1>
          <div>
            <p className="blog-desc">
              Add Credit to your <b>Wallet</b>:
              <ol>
                <li>Click Buy Credits from Dashboard.</li>
                <li>Choose how many credits to purchase and checkout.</li>
              </ol>
              <p className="blog-tips">
                The wallet has a <b>Stripe Payment</b>.
                <br />
                Contact us if you want to pay with another method like{" "}
                <b>WechatPay or crypto (DAI,USDC,BTC,ETH,SOL,NEAR).</b>
              </p>
            </p>

            <div className="blog-ss">
              <img src={WALLETCREDITS1} alt="" />
              <img src={WALLETCREDITS2} alt="" />
              <img src={WALLETCREDITS3} alt="" />
            </div>
          </div>
          <br />
          <h1>Run Hello NVIDIA</h1>
          <div className="blog-tips">
            Hosts (or nodes) are individual entities on the network which are
            herded together using an explorer.
          </div>
          <p className="blog-desc">
            <ol>
              <li>
                Go to{" "}
                <a
                  href="https://explorer.gpux.ai/"
                  target="_blank"
                  rel="noreferrer"
                >
                  GPUX Explorer Page
                </a>{" "}
                and click Pod.
              </li>
              <li>The default values are set to print nvidia-smi output.</li>
              <li>Click [Run!]</li>
              <li>Click the [📜 Log] button to see the output</li>
            </ol>
          </p>

          <div className="blog-ss blog-ss-wide">
            <img src={EXPLORERPOD} alt="" />
          </div>
          <br />
          <h1>Run Jupyter Notebook</h1>
          <div className="blog-tips">
            Port Forwarding is done using subdomain addressing.
          </div>
          <p className="blog-desc">
            <ol>
              <li>Select template [Jupyter Notebook].</li>
              <li>Click the [🔌 8080] button to forward to the notebook</li>
            </ol>
          </p>
          <div className="blog-ss blog-ss-wide">
            <img src={EXPLORERHUPYTER} alt="" />
          </div>

        </div>
      </div>
    </div>
  );
}
