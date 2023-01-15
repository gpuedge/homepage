import { Outlet } from "@remix-run/react";
import stylesIndex from "~/components/index.css";
import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";
import BlogRightMenu from "~/components/blog/BlogRightMenu";
import blogStyle from "~/pages/blogStyle.css";
import mdStyle from "~/pages/mdStyle.css";
export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: blogStyle },
    { rel: "stylesheet", href: mdStyle },
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
      <div className="blog-container web-align">
        <div className="blog-container-left markdown-body">
          <Outlet />
        </div>
        <BlogRightMenu />
      </div>
      <Footer />
    </>
  );
}