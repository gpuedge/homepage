import Render from "~/pages/render/Render";

import stylesAI from "~/pages/blogStyle.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesAI }];
};

export default function Index() {
  return <Render />;
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}
