import React from "react";
import NextHead from "next/head";

const Head = ({ children }) => {
  return (
    <NextHead>
      <link rel="stylesheet" href="/css/global.css" />
      <link rel="stylesheet" href="/css/sidebar.css" />
      <link rel="stylesheet" href="/css/banner-right.css" />
      <link rel="stylesheet" href="/css/navbar.css" />
      {children}
    </NextHead>
  );
};

export default Head;
