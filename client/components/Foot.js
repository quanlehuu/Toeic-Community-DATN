import Script from "next/script";
import React, { useEffect } from "react";
// import { getPopularTag } from "../js/getPopularTag";
// import { getTopUser } from "../js/getTopUser";
// import { logout } from "../js/logout";
// import { getNotification } from "../js/notification";
// import { search } from "../js/search";
// import { sidebar } from "../js/Sidebar";
// import { user } from "../js/user";

const Foot = () => {
  // useEffect(() => {
  //   user();
  //   getTopUser();
  //   logout();
  //   sidebar();
  //   search();
  //   getNotification();
  //   getPopularTag();
  // }, []);

  return (
    <>
      <Script src="/js/user.js"></Script>
      <Script src="/js/getTopUser.js"></Script>
      <Script src="/js/logout.js"></Script>
      <Script src="/js/sidebar.js"></Script>
      <Script src="/js/search.js"></Script>
      <Script src="/js/notification.js"></Script>
      <Script src="/js/getPopularTag.js"></Script>
    </>
  );
};

export default Foot;
