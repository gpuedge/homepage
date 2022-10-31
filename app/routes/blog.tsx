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
  title: 'GPUX - Blog',
  description: `
    GPUX is a distributed supercomputer. 
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