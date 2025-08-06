import Head from "next/head";
import HomeMain from "../components/HomeMain";
import HomeAlert from "../components/HomeAlert";
import CenteredBlockPage from "./tuned";

// sqrt(sqr(mag(S11+S12*(re(x2)+im(y2)))+sqr(mag(S21+S22*re(x2)+im(y2)))))/2

export default function Home() {
  return (
    <div id="main" className="relative ">
      <Head>
        <title>MAC2026 </title>
        <meta name="description" content="MAC-2026" />
        <link rel="icon" href="/icon2.png" />
      </Head>
      {/* <CenteredBlockPage/> */}
      <HomeMain />
      {/* <HomeAlert /> */}
    </div>
  );
}
