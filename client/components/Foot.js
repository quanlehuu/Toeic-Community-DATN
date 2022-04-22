import React from "react";
import Script from "./Script";

const Foot = () => {
  return (
    <>
      <Script src="/js/user.js"></Script>
      <Script src="/js/getTopUser.js"></Script>
      <Script src="/js/logout.js"></Script>
      <Script src="/js/Sidebar.js"></Script>
      <Script src="/js/search.js"></Script>
      <Script src="/js/notification.js"></Script>
      <Script src="/js/getPopularTag.js"></Script>
    </>
  );
};

export default Foot;
