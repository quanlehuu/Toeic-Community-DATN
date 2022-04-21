import React from "react";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Script from "../components/Script";
import Top8 from "../components/Top8";

const ChangePass = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/mypage.css" />
        <link rel="stylesheet" href="/css/changePassWord.css" />
      </Head>
      <Navigation />
      <Top8 />
      <div className="content">
        <div className="top">
          <div
            id="loginalert"
            style={{ display: "none" }}
            className="alert alert-danger"
          >
            <p />
          </div>
          <div className="row span">
            <label htmlFor="curPass" className="col-md-3 control-label">
              Current password
            </label>
            <input
              type="password"
              className="col-md-8"
              defaultValue=""
              id="oldPass"
              name="oldPass"
            />
          </div>
          <div className="row span">
            <label htmlFor="curPass" className="col-md-3 control-label">
              New password
            </label>
            <input
              type="password"
              className="col-md-8"
              defaultValue=""
              id="newPass"
              name="newPass"
            />
          </div>
          <div className="row span">
            <label htmlFor="curPass" className="col-md-3 control-label">
              Retype new password
            </label>
            <input
              type="password"
              className="col-md-8"
              defaultValue=""
              id="reNewPass"
              name="reNewPass"
            />
          </div>
          <input
            type="button"
            defaultValue="Save"
            className="btn btn-primary button"
            id="change"
          />
        </div>
      </div>
      <Foot />
      <Script src="/js/changePass.js"></Script>
    </>
  );
};

export default ChangePass;
