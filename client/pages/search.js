import React from "react";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Posts from "../components/Posts";
import Script from "../components/Script";
import Top8 from "../components/Top8";

const Search = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/newsfeed.css" />
      </Head>
      <div id="body" style={{ visibility: "hidden" }}>
        <Navigation />
        <div style={{ position: "relative" }}>
          <div id="content">
            <Posts />
            <p className="no-post">Don't have any posts having this tag!</p>
          </div>
          <Top8 />
        </div>
      </div>
      <Foot />
      <Script src="/js/showPost.js"></Script>
      <Script src="/js/searchResult.js"></Script>
    </>
  );
};

export default Search;
