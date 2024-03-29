import { Outlet } from "@remix-run/react";

import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import DedicatedServer from "../pages/dedicated-server/DedicatedServer";
import DedicatedStyle from "../pages/dedicated-server/dedicated.css";
export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: DedicatedStyle },
  ];
};

export const meta = () => ({
  title: "GPUX - Dedicated Server",
  description: `
    Rent bare metal.
  `,
});

export default function BlogRoute() {
  return (
    <>
      <Navbar />
      <DedicatedServer />
      <Footer />
    </>
  );
}
