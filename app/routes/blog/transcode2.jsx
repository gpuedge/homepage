import Transcode from "~/pages/transcode/Transcode";

import stylesAI from "~/pages/blogStyle.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesAI }];
};

export default function Index() {
  return <Transcode />;
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}
