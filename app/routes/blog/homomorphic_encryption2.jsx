import HomoEnc from "~/pages/homomorphic_enc/HomoEnc";

import stylesAI from "~/pages/blogStyle.css";
export const links = () => {
  return [{ rel: "stylesheet", href: stylesAI }];
};

export default function Index() {
  return <HomoEnc />;
}

export function ErrorBoundary({ error }) {
  console.error(error);
  return <div>I did a whoopsies.</div>;
}
