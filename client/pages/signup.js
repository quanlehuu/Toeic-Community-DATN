import Head from "next/head";
import Link from "next/link";
import React from "react";
import Script from "../components/Script";

const Signup = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/login.css" />
        <link rel="stylesheet" href="/css/signup.css" />
      </Head>
      <header className="fix">
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
        <div
          id="signupbox"
          style={{ marginTop: 60 }}
          className="mainbox col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2"
        >
          <div className="panel panel-info">
            <div className="panel-body">
              <div className="login-title">Sign Up</div>
              <div id="signupform" className="form-horizontal">
                <div
                  id="signupalert"
                  style={{ display: "none" }}
                  className="alert alert-danger"
                >
                  <p />
                </div>
                <div className="form-group has-feedback" id="username">
                  <label htmlFor="username" className="col-md-4">
                    Username *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="username"
                      placeholder="Username"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="password">
                  <label htmlFor="password" className="col-md-4">
                    Password *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      placeholder="Password"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="repassword">
                  <label htmlFor="repassword" className="col-md-4">
                    Retype password *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="password"
                      className="form-control"
                      name="repassword"
                      placeholder="Confirm Password"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="name">
                  <label htmlFor="fullname" className="col-md-4">
                    Full Name *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="name"
                      placeholder="Your full name"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="birthday">
                  <label htmlFor="birthday" className="col-md-4">
                    Birthday
                  </label>
                  <div className="col-md-8">
                    <input
                      type="date"
                      className="form-control"
                      name="birthday"
                      placeholder="Birthday"
                      min="1900-01-01"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="email">
                  <label htmlFor="email" className="col-md-4">
                    Email *
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="email"
                      placeholder="Email Address"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div className="form-group has-feedback" id="phonenumber">
                  <label htmlFor="phonenumber" className="col-md-4">
                    Phone Number
                  </label>
                  <div className="col-md-8">
                    <input
                      type="text"
                      className="form-control"
                      name="phonenumber"
                      placeholder="Phone Number"
                    />
                    <span
                      className="glyphicon glyphicon-remove form-control-feedback"
                      style={{ display: "none" }}
                    />
                    <span
                      className="glyphicon glyphicon-ok form-control-feedback"
                      style={{ display: "none" }}
                    />
                  </div>
                </div>
                <div
                  className="col-md-8 col-md-offset-4 checkbox"
                  style={{ marginBottom: 10 }}
                >
                  <label>
                    <input type="checkbox" /> Do you agree the rules below? Take
                    a look!
                  </label>
                </div>
                <div className="form-group">
                  {/* Button */}
                  <div className="col-md-2 col-md-offset-4">
                    <input
                      id="btn-signup"
                      type="submit"
                      className="btn btn-info"
                      defaultValue="Sign Up"
                    />
                  </div>
                  <div className="col-md-6">
                    <Link href="/login">
                      <a
                        style={{
                          fontSize: 13,
                        }}
                      >
                        Already had an account?Log in now!
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="panel panel-default">
          <p
            className="panel-heading rule"
            style={{ backgroundColor: "#b4b4b4" }}
          >
            <strong>
              Nội quy &amp; Hướng dẫn sử dụng (Rules and manual - Vietnamese)
            </strong>
          </p>
          <div className="panel-body text">
            <p> I. Quy định về tài khoản:</p>
            <div className="text1">
              <p>
                1. Username phải dùng 6 kí tự trở lên và không chứa kí tự đặc
                biệt.{" "}
              </p>
              <p>
                2. Password phải dùng 6 kí tự trở lên kết hợp với chữ số và biểu
                tượng.
              </p>
              <p>3. Phải ghi rõ đầy đủ họ và tên.</p>
              <p>
                4. Không được sử dụng avatar là các hình ảnh có nội dung không
                lành mạnh,ghê rợn,bạo lực,sexy,vi phạm thuần phong mỹ tục của
                Việt Nam.
              </p>
            </div>
            <p> II. Quy định về nội dung được đăng tải:</p>
            <div className="text1">
              <p>
                {" "}
                1. Đối với những bài viết bằng tiếng Việt nên sử dụng tiếng Việt
                có dấu.
              </p>
              <p>
                {" "}
                2. Đối với những bài viết bằng tiếng nước ngoài, thành viên phải
                tự chịu trách nhiệm toàn bộ về nội dung bài viết.
              </p>
              <p>
                {" "}
                3. Không sử dụng ngôn từ thiếu văn hóa, khiêu dâm, đe dọa, lăng
                nhục các thành viên khác cũng như làm ảnh hưởng đến uy tín chung
                của cộng đồng, gây mất đoàn kết trong diễn đàn.{" "}
              </p>
              <p>
                {" "}
                4. Không được đưa các hình ảnh bạo lực, đồi trụy, ghê rợn, có
                tính chất không lành mạnh, không phù hợp với truyền thống văn
                hóa Việt Nam.
              </p>
            </div>
            <p> III. Quy định về hành vi ứng xử của các thành viên</p>
            <div className="text1">
              <p>
                {" "}
                1. Không đề xướng và tham gia bàn luận các vấn đề liên quan đến
                những nội dung được đề cập trong mục (II.4).
              </p>
              <p>
                {" "}
                2. Có thái độ đúng mực, tôn trọng lẫn nhau trong quá trình trao
                đổi và tranh luận.
              </p>
            </div>
            <p> IV. Hướng dẫn sử dụng:</p>
            <div className="text1">
              <p>
                {" "}
                1. Đây là trang web ôn luyện TOEIC trực tuyến,để tham gia các
                bạn cần phải có một tài khoản.Các bạn đăng kí tài khoản theo quy
                định đã được nêu rõ ở mục (I).{" "}
              </p>
              <p>
                {" "}
                2. Sau khi đăng kí các bạn cần phải đăng nhập vào web thông qua
                trang Log In.{" "}
              </p>
              <p>
                {" "}
                3. Sau khi đăng nhập sẽ chuyển qua trang Newsfeed,tại đây sẽ
                hiện tất cả bài đăng của mọi người.Tại đây các bạn có thể tham
                gia tranh luận về các câu hỏi trong bài đăng và có thể lưu lại
                nếu thấy bổ ích.Các bạn cũng có thể theo dõi bất kì một ai mà
                các bạn muốn.{" "}
              </p>
              <p>
                {" "}
                4. Để đăng bài các bạn vào mục Post ở thanh Menu bên trái màn
                hình,sau đó điền đầy đủ thông tin liên quan tới bài đăng theo
                mẫu có sẵn và ấn đăng bài. Nhớ tuân theo quy định đã nêu ở mục
                (II) .
              </p>
              <p>
                {" "}
                5. Để thay đổi các thông tin cá nhân như: Tên đầy đủ, hình đại
                diện, ... các bạn có thể vào trang cá nhân để đổi.{" "}
              </p>
              <p>
                {" "}
                6. Nếu các bạn muốn đổi mật khẩu có thể vào mục Change Password
                ở thanh Menu bên trái màn hình, sau đó điền theo mẫu có sẵn và
                ấn hoàn tất.{" "}
              </p>
              <p>
                {" "}
                7. Để xem lại các bài đã lưu các bạn vào mục Saved ở thanh Menu
                bên trái màn hình.{" "}
              </p>
              <p>
                {" "}
                8. Để xem trang của những người mình đã theo dõi các bạn vào mục
                Following{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <Script src="/js/Signup.js"></Script>
    </>
  );
};

export default Signup;
