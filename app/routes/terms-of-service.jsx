import { Link } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import stylesAI from "~/pages/blogStyle.css";

import LEGAL_TOS from "~/assets/legal_tos.jpg";

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
            <a href="https://rawcdn.githack.com/gpuedge/homepage/fb23b431253e0a9bd63ec9993c020bfd9f7338e4/app/assets/GPUX_Terms_of_Service-10_30_2022.pdf" style={{textDecoration: "none", color: "inherit"}}>
              📁 Download Terms of Service</a>
          </span>
          <img src={LEGAL_TOS} alt="" />
        </div>
      </div>
    </div>
  );
}
