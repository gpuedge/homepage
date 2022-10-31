import { Link } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import stylesAI from "~/pages/ai/ai.css";

import LEGAL_PRIVACY from "~/assets/legal_privacy.jpg";

export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: stylesAI },
  ];
};

export const meta = () => ({
  title: "GPUX - Privacy",
  description: `
    GPUX is a distributed supercomputer. 
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
          <span class="blog-small-text">
            <a href="https://rawcdn.githack.com/gpuedge/wallet/a6a590d3276152d1b66ec2bff4a256144210c7ee/src/html/css/bootstrap.min.css" style={{textDecoration: "none", color: "inherit"}}>
              📁 Download Privacy Policy</a>
          </span>
          <img src={LEGAL_PRIVACY} alt="" />
        </div>
      </div>
    </div>
  );
}
