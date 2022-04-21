import Link from "next/link";
import React, { useEffect } from "react";

const Navigation = () => {
  useEffect(() => {
    document
      .getElementById("sb-mypage")
      .setAttribute("href", "/user/" + localStorage.getItem("username"));
  }, []);

  return (
    <>
      <nav className="top-nav">
        <div className="menu-logo">
          <div className="toggle-menu">
            <i className="fas fa-bars" />
          </div>
          <Link href="/">
            <a className="logo-name">
              <div className="logo" />
              <div className="name"> Toeic Community</div>
            </a>
          </Link>
        </div>
        <div className="search">
          <div className="search-box">
            <input
              type="text"
              name="keyword"
              placeholder="Type tag and enter..."
              className="form-control"
            />
          </div>
          <div id="search">
            <i className="fas fa-search" />
          </div>
        </div>
        <div className="notification">
          <i className="fas fa-bell" />
          <span> 5</span>
          <div className="notification-view style">
            <div className="notis">
              <a>
                Mark all as read
                <i className="fa fa-check-circle" style={{ marginLeft: 10 }} />
              </a>
            </div>
            <div id="notiId">
              <a href="#">
                <img src="/static/img/avatar_default.png" />
                <div className="notification-detail">
                  <span>content</span>
                  <i>time</i>
                </div>
                <div style={{ clear: "left" }} />
              </a>
              <i className="fa fa-check-circle" />
            </div>
            <div className="loading">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      </nav>
      {/* LEFT NAV */}
      <div id="vertical-menu">
        <a className="row">
          <div className="col-sm-3 avt" style={{ textAlign: "center" }}>
            <img
              className="mypic"
              src="/static/img/avatar_default.png"
              alt="Avatar"
            />
          </div>
          <div
            className="col-sm-9"
            style={{ paddingTop: 9, textAlign: "center" }}
          >
            <p id="name" />
            <p id="point"></p>
          </div>
        </a>
        <Link href="/">
          <a id="sb-newsfeed">
            <p>
              <i className="fa fa-newspaper" />
              News Feed
            </p>
          </a>
        </Link>
        <a id="sb-mypage">
          <p>
            <i className="fa fa-home" />
            My Page
          </p>
        </a>
        <Link href="/post">
          <a id="sb-post">
            <p>
              <i className="fa fa-edit" />
              Post
            </p>
          </a>
        </Link>
        <Link href="/saved">
          <a id="sb-saved">
            <p>
              <i className="fa fa-bookmark" />
              Saved
            </p>
          </a>
        </Link>
        <Link href="/following">
          <a id="sb-following">
            <p>
              <i className="fa fa-user" />
              Following
            </p>
          </a>
        </Link>
        <Link href="/changepassword">
          <a id="sb-changepass">
            <p>
              <i className="fa fa-lock" />
              Change Password
            </p>
          </a>
        </Link>
        <Link href="/video">
          <a href="/video" id="sb-changepass">
            <p>
              <i className="fa fa-video" />
              Video học tiếng anh
            </p>
          </a>
        </Link>
        <Link href="/exam">
          <a href="/exam" id="sb-changepass">
            <p>
              <i className="fa fa-book" />
              Exam for you
            </p>
          </a>
        </Link>
        <a style={{ cursor: "pointer" }} id="sb-logout">
          <p>
            <i className="fa fa-sign-out-alt" />
            LogOut
          </p>
        </a>
        <p className="popular-tag" style={{ borderTop: "1px solid" }}></p>
      </div>
    </>
  );
};

export default Navigation;
