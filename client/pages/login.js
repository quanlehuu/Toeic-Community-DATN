import Head from "next/head";
import Link from "next/link";
// import Script from "next/script";
import React, { useEffect } from "react";
import Script from "../components/Script";

const Login = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/login.css" />
      </Head>
      <header>
        <img className="logo" src="/static/img/logo.png" />
        <span className="toeic-community">Toeic Community</span>
      </header>
      <div className="container">
        <div className="backdrop">
          <div className="lds-ring">
            <div />
            <div />
            <div />
            <div />
          </div>
        </div>
        <div className="panel login-container">
          <div className="login-title">Login</div>
          <div
            id="loginalert"
            style={{ display: "none" }}
            className="alert alert-danger"
          >
            <p />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-user" />
            </span>
            <input
              id="login-username"
              type="text"
              className="form-control"
              name="username"
              defaultValue=""
              placeholder="Username"
            />
          </div>
          <div className="input-group">
            <span className="input-group-addon">
              <i className="glyphicon glyphicon-lock" />
            </span>
            <input
              id="login-password"
              type="password"
              className="form-control"
              name="password"
              defaultValue=""
              placeholder="Password"
            />
          </div>
          <div className="remember-forget">
            <a className="forget-pass" href="#">
              <i>Forget Password?</i>
            </a>
            <div style={{ clear: "right" }} />
          </div>
          <button type="button" className="btn btn-block btn-login" id="login">
            Login
          </button>
          <div className="signup">
            Don't have an Account?{" "}
            <Link href="/signup">
              <a>
                <i>Sign up here</i>
              </a>
            </Link>
          </div>
          <button
            type="button"
            className="btn btn-login btn-signup"
            id="signup"
          >
            Sign up
          </button>
        </div>
      </div>
      <Script src="/js/Login.js" />
    </>
  );
};

export default Login;
