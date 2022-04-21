import React from "react";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Script from "../components/Script";
import Top8 from "../components/Top8";

const Following = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/newsfeed.css" />
        <link rel="stylesheet" type="text/css" href="/css/following.css" />
      </Head>
      <Navigation />
      <Top8 />
      <div id="content"></div>
      <Foot />
      <Script src="/js/following.js"></Script>
    </>
  );
};

export default Following;
