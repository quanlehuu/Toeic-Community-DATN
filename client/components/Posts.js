import React from "react";

const Posts = () => {
  return (
    <>
      <div className="backdrop">
        <div className="lds-ring">
          <div />
          <div />
          <div />
          <div />
        </div>
      </div>
      <div id="posts">
        <div id="postid">
          <div className="post">
            {/* User posts, time */}
            <img className="avt" src="" alt="Avatar" />
            <div className="user-post">
              <b>
                <a>Lê Hữu Quân</a>
              </b>
              <i>14:05 02/04/2022</i>
            </div>
            <div style={{ clear: "left" }} />
            {/* Post content */}
            <div className="content-post">
              <span className="question">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor daf fi incididunt ut labore et dolore magna
                aliqua.
              </span>
              <div className="options">
                <span className="option optionA">A. even</span>
                <span className="option optionB">B. once</span>
                <span className="option optionC">C. early</span>
                <span className="option optionD">D. always</span>
              </div>
              <p className="tag">
                <b>Tag: </b>
              </p>
              <button className="show-solution">Show Solution</button>
              <div className="solution">
                <p>
                  Choice
                  <b />
                </p>
                <p>
                  Explanation:
                  <i />
                </p>
              </div>
            </div>
            {/* Vote up, vote down, comment, save  */}
            <div className="row vote-cmt-save">
              <div className="col-xs-3 vote-up-down vote-up">
                <i className="fa fa-caret-up" />
                <p>Vote up</p>
              </div>
              <div className="col-xs-3 vote-up-down vote-down">
                <i className="fa fa-caret-down" />
                <p>Vote down</p>
              </div>
              <div className="col-xs-3 cmt" data-toggle="modal">
                <i className="fa fa-comments comment-save" />
                <p>Comment</p>
              </div>
              <div className="col-xs-3 save">
                <i className="fa fa-bookmark comment-save" />
                <p>Save</p>
              </div>
            </div>
            {/* Typing comment */}
            <div className="typing-comment">
              <img src="/static/img/avatar.jpg" alt="Avatar" />
              <input
                type="text"
                defaultValue=""
                name="comment"
                placeholder="Write a comment"
              />
              <button className="enter-comment">Enter</button>
            </div>
            {/* Comment */}
            <div className="comment">
              <img src="/static/img/avatar.jpg" alt="Avatar" />
              <div className="user-cmt">
                <b>
                  <a>name</a>
                </b>
                <i>time</i>
                <span>comment</span>
              </div>
              <div style={{ clear: "left" }} />
            </div>
            {/* More ... */}
            <div className="dropdown more">
              <i
                className="fas fa-ellipsis-h dropdown-toggle"
                data-toggle="dropdown"
              />
              <ul
                className="dropdown-menu"
                role="menu"
                aria-labelledby="option"
              >
                <li role="presentation">
                  <a role="menuitem" tabIndex={-1} href="#" className="delete">
                    Delete
                  </a>
                </li>
                {/* <li role="presentation" class="divider"></li>                                     */}
                {/* <li role="presentation">
                   <a role="menuitem" tabindex="-1" href="#">Get Notifications</a>
               </li> */}
              </ul>
            </div>
            {/* Popup comment*/}
            <div className="modal fade" role="dialog">
              <div className="modal-dialog">
                {/* Modal content*/}
                <div className="modal-content">
                  <div className="modal-header">
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                    />
                    <h4 className="modal-title">Comment</h4>
                  </div>
                  <div className="modal-body">
                    <span className="lds-ring">
                      <div />
                      <div />
                      <div />
                      <div />
                    </span>
                  </div>
                  <div className="modal-footer">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post loader">
        <div className="box-image" />
        <div className="box-name" />
        <div className="box-time" />
        <div className="content-post">
          <div className="box-question1" />
          <div className="box-question2" />
          <div className="opts">
            <div className="box-option" />
            <div className="box-option" />
            <div className="box-option" />
            <div className="box-option" />
          </div>
          <div className="box-tag" />
          <div className="box-solution" />
        </div>
      </div>
      <div id="commentId">
        <div className="aComment">
          <div className="vote-comment">
            <i className="fa fa-caret-up vote-cmt-up" />
            <i className="fa fa-caret-down vote-cmt-down" />
          </div>
          <img src="" alt="Avatar" />
          <div className="user-cmt">
            <b>
              <a>name</a>
            </b>
            <i>time</i>
            <span>comment</span>
          </div>
          <div style={{ clear: "left" }} />
        </div>
      </div>
    </>
  );
};

export default Posts;
