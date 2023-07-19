import SDXL from "~/pages/ai/sdxl";

import stylesAI from "~/pages/ai/ai.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesAI }];
};

export default function Index() {
  return <SDXL />;
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}
