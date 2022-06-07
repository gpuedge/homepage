import { Outlet } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";

export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
  ];
};

export const meta = () => ({
  title: 'GPUx - Blog',
  description: `
    GPUX is a distributed supercomputer for anyone to access. 
    It can run dedicated server gpus, act as a render farm for rendering, act as a protein folding network,
    transcode video, or live stream video.
  `,
});

export default function BlogRoute() {
  return (
    <>
        <Navbar />
        <Outlet />
        <Footer />
    </>
  );
}