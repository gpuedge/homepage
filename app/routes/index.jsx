import { LinksFunction } from "@remix-run/cloudflare";

import stylesIndex from "~/components/index.css";

import stylesNavbar from "~/components/navbar/navbar.css";
import Navbar from "~/components/navbar/Navbar";
import stylesFooter from "~/components/footer/footer.css";
import Footer from "~/components/footer/Footer";

import Header from "~/components/header/Header";
import stylesHeader from "~/components/header/header.css";
import Product from "~/components/product/Product";
import stylesProduct from "~/components/product/product.css";
import Showcase from "~/components/showcase/Showcase";
import stylesShowcase from "~/components/showcase/showcase.css";
import Article from "~/components/article/Article";
import stylesArticle from "~/components/article/article.css";
import Press from "~/components/press/Press";
import stylesPress from "~/components/press/press.css";
import Test from "~/components/test/Test";
import stylesTest from "~/components/test/test.css";
import ArrowUpIcon from "../components/ArrowUpIcon";
import Client from "../components/client/client";
import stylesClient from "../components/client/client.css";
import BlogSection from "../components/blog/BlogSection";
import BlogSectionStyle from "../components/blog/blogsection.css";

export const links = () => {
  return [
    { rel: "stylesheet", href: stylesIndex },
    { rel: "stylesheet", href: stylesNavbar },
    { rel: "stylesheet", href: stylesHeader },
    { rel: "stylesheet", href: stylesProduct },
    { rel: "stylesheet", href: stylesShowcase },
    { rel: "stylesheet", href: stylesArticle },
    { rel: "stylesheet", href: stylesPress },
    { rel: "stylesheet", href: stylesTest },
    { rel: "stylesheet", href: stylesFooter },
    { rel: "stylesheet", href: stylesClient },
    { rel: "stylesheet", href: BlogSectionStyle },
  ];
};

export const meta = () => ({
  title: 'GPUX',
  description: `
    ⚡ once again im here
  `,
});

export default function Index() {
  return (
    <>
      <Navbar />
      <Header />
      <Product />
      <Showcase />
      <Client />
      <BlogSection />
      <Article />
      {/*<Press />
      <Test />*/}
      <Footer />
      <ArrowUpIcon />
    </>
  );
}
