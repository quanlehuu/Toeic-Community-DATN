import React from "react";
import Foot from "../components/Foot";
import Head from "../components/Head";
import Navigation from "../components/Navigation";
import Script from "../components/Script";
import Top8 from "../components/Top8";

const Post = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/postStyle.css" />
      </Head>
      <Navigation />
      <Top8 />
      <div id="body">
        {/* CONTENT */}
        <div id="content">
          <div className="backdrop">
            <div className="lds-ring">
              <div />
              <div />
              <div />
              <div />
            </div>
          </div>
          <div id="posts" className="col-sm-12 col-md-12 posts">
            <div
              id="signupalert"
              style={{ display: "none" }}
              className="alert alert-danger"
            >
              <p />
            </div>
            <div id="postform" className="form-horizontal">
              {/* choices */}
              <div className="form-group  choices">
                <label htmlFor="username" className="col-md-2">
                  You post to
                </label>
                <div className="col-md-8 form-inline">
                  <div className="form-check ">
                    <input
                      className="form-check-input"
                      name="group100"
                      type="radio"
                      id="radio100"
                      defaultChecked
                    />
                    <label className="form-check-label" htmlFor="radio100">
                      share knowledge
                    </label>
                  </div>
                  <div className="form-check" style={{ marginLeft: 20 }}>
                    <input
                      className="form-check-input"
                      name="group100"
                      type="radio"
                      id="radio101"
                    />
                    <label className="form-check-label" htmlFor="radio101">
                      ask for help
                    </label>
                  </div>
                </div>
              </div>
              {/* Begin Question */}
              <div
                className="form-group"
                style={{ textAlign: "left" }}
                id="Question"
              >
                <label htmlFor="Question" className="col-md-2">
                  Question
                </label>
                <div className="col-md-8">
                  <textarea
                    name="Question"
                    className="form-control"
                    rows={5}
                    defaultValue={""}
                  />
                  <span
                    className="glyphicon glyphicon-remove form-control-feedback"
                    style={{ display: "none", marginRight: 15 }}
                  />
                </div>
              </div>
              {/* End Question */}
              {/* Begin answers section*/}
              <div className="form-group answer">
                <div className="col-md-2">
                  <label htmlFor="answer">Answer</label>
                </div>
                {/* 4 answers */}
                <div className="form-group" id="A">
                  <label htmlFor="A" className="col-md-2 control-label">
                    A
                  </label>
                  <div className="col-md-8 answerABCD">
                    <input type="text" className="form-control" name="A" />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none", marginRight: 25 }}
                    />
                  </div>
                </div>
                <div className="form-group" id="B">
                  <label htmlFor="B" className="col-md-2 control-label">
                    B
                  </label>
                  <div className="col-md-8 answerABCD">
                    <input type="text" className="form-control" name="B" />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none", marginRight: 25 }}
                    />
                  </div>
                </div>
                <div className="form-group" id="C">
                  <label htmlFor="C" className="col-md-2 control-label">
                    C
                  </label>
                  <div className="col-md-8 answerABCD">
                    <input type="text" className="form-control" name="C" />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none", marginRight: 25 }}
                    />
                  </div>
                </div>
                <div className="form-group" id="D">
                  <label htmlFor="D" className="col-md-2 control-label">
                    D
                  </label>
                  <div className="col-md-8 answerABCD">
                    <input type="text" className="form-control" name="D" />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none", marginRight: 25 }}
                    />
                  </div>
                </div>
                {/* end 4 answers */}
              </div>
              {/* End answers section*/}
              {/* Begin solution section */}
              <div className="form-group">
                <div className="col-md-2">
                  <label htmlFor="solution" style={{ paddingTop: 6 }}>
                    Solution
                  </label>
                </div>
                {/* dropdown bar */}
                <div className="col-md-8 dropdown">
                  <select
                    name="solution"
                    id="solution"
                    className="btn btn-default"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                    <option value="D">D</option>
                  </select>
                </div>
              </div>
              {/* End solution section */}
              {/* Begin explanation section */}
              <div className="form-group" id="Explanation">
                <label htmlFor="explanation" className="col-md-2">
                  Explanation
                </label>
                <div className="col-md-8">
                  <textarea
                    className="form-control"
                    rows={5}
                    name="Explanation"
                    defaultValue={""}
                  />
                  <span
                    className="glyphicon glyphicon-remove form-control-feedback"
                    style={{ display: "none", marginRight: 15 }}
                  />
                </div>
              </div>
              {/* End explanation section */}
              {/* Begin tag section */}
              <div className="form-group" id="Tag">
                <label
                  htmlFor="Tag"
                  className="col-md-2"
                  style={{ marginTop: 5 }}
                >
                  Tag
                </label>
                <div className="col-md-8">
                  <input
                    type="text"
                    name="Tag"
                    defaultValue=""
                    data-role="tagsinput"
                  />
                  <span
                    className="glyphicon glyphicon-remove form-control-feedback"
                    style={{ display: "none", marginRight: 15 }}
                  />
                </div>
              </div>
              {/* End tag section */}
              {/* Post btn */}
              <div className="col-md-10">
                <input
                  id="submit"
                  type="submit"
                  className="btn btn-primary"
                  style={{ float: "right", marginRight: "-10px" }}
                  defaultValue="Post"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Foot />
      <Script src="/js/Post.js"></Script>
      <Script src="/js/Tagsinput.js"></Script>
    </>
  );
};

export default Post;
