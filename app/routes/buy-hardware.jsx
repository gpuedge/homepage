import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import Hardware from "../pages/hardware/Hardware";
import HardwareStyle from "../pages/dedicated-server/dedicated.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: HardwareStyle },
  ];
};

export const meta = () => ({
  title: "GPUX - Hardware",
  description: `
    Why rent? Own!
  `,
});

export default function BlogRoute() {
  return (
    <>
      <Navbar />
      <Hardware />
      <Footer />
    </>
  );
}
