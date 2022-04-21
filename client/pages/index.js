import Top8 from "../components/Top8";
import Posts from "../components/Posts";
import Navigation from "../components/Navigation";
import Head from "../components/Head";
import Foot from "../components/Foot";
import Script from "../components/Script";

export default function Home() {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/newsfeed.css" />
      </Head>
      <div>
        <div id="body" style={{ visibility: "hidden" }}>
          <Navigation />
          <div style={{ position: "relative" }}>
            <div id="content">
              <Posts />
            </div>
          </div>
          <Top8 />
        </div>
      </div>
      <Foot />
      <Script src="/js/showPost.js"></Script>
      <Script src="/js/newsfeed.js"></Script>
    </>
  );
}
