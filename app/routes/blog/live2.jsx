import Live from "~/pages/live/Live";

import stylesAI from "~/pages/blogStyle.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesAI }];
};

export default function Index() {
  return <Live />;
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}
