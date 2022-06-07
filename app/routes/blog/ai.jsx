import Ai from "~/pages/Ai";

import stylesAI from "~/pages/ai.css";
export const links = () => {
  return [
    { rel: "stylesheet", href: stylesAI },
  ];
};

export default function Index() {
  return (
      <Ai />
  )
}

export function ErrorBoundary({error}) {
  console.error(error)
  return <div>I did a whoopsies.</div>
}