import React from "react";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";
import Script from "../components/Script";
import Top8 from "../components/Top8";

const Saved = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/newsfeed.css" />
      </Head>
      <div id="body" style={{ visibility: "hidden" }}>
        <Navigation />
        <div
          style={{
            position: "relative",
          }}
        >
          <div id="content">
            <Posts></Posts>
            <p className="no-post">You haven't saved any posts!</p>
          </div>
        </div>
        <Top8 />
      </div>

      <Foot />
      <Script src="/js/showPost.js"></Script>
      <Script src="/js/saved.js"></Script>
    </>
  );
};

export default Saved;
