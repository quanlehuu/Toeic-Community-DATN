import { useRouter } from "next/router";
import React from "react";
import Foot from "../../components/Foot";
import Head from "../../components/Head";
import Navigation from "../../components/Navigation";
import Posts from "../../components/Posts";
import Script from "../../components/Script";
import Top8 from "../../components/Top8";

const MyPage = () => {
  const router = useRouter();
  const name = router.query.name;
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/mypage.css" />
        <link rel="stylesheet" href="/css/newsfeed.css" />
      </Head>
      <Navigation />
      <Top8 />
      <header>
        <img className="logo" src="/static/img/logo.png" />
        <span className="toeic-community">Toeic Community</span>
      </header>
      <div className="content">
        <div className="avatar">
          <img className="pic" src="" />
          <input type="file" id="changeAvatar" />
          <div className="change-avatar">
            <i className="fas fa-camera"></i>Update Image
          </div>
        </div>
        <div className="name-score">
          <span className="name"></span>
          <i className="fa fa-heart heart fa-lg"></i>
          <span className="score"></span>
        </div>
        <div id="follow"></div>
        <div className="info-container">
          <h2 className="title">Personal Information</h2>

          <div className="info">
            <span>Username</span>
            <span id="username"></span>
          </div>
          <div className="info">
            <span>Full name</span>
            <span id="fullname"></span>
          </div>
          <div className="info">
            <span>Birthday</span>
            <span id="birthday"></span>
          </div>
          <div className="info">
            <span>Phone number</span>
            <span id="phonenumber"></span>
          </div>
          <div className="info">
            <span>Email Address</span>
            <span id="email"></span>
          </div>
          <div></div>

          <h2 className="title">Posts</h2>
          <Posts />
          <p className="no-post" style={{ padding: 0 }}>
            Don't have any posts!
          </p>
        </div>

        <a id="useridentification" style={{ display: "none" }}>
          {name}
        </a>
      </div>
      <Foot />
      <Script src="/js/showPost.js"></Script>
      <Script src="/js/profile.js"></Script>
    </>
  );
};

export default MyPage;
