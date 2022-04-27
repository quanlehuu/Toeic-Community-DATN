import React from "react";
import Head from "next/head";

const Video = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="/css/video.css" />
      </Head>
      <header>
        <a href="/">
          <img className="logo" src="static/img/logo.png" />
          <span className="toeic-community">Toeic Community</span>
        </a>
      </header>
      <div className="container1">
        <h2>1. Những video dành cho người mất gốc tiếng anh</h2>
        <div className="list-video">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/4XPvqRmT4uo"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/1FdCazTGE2w"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/YjVJCa589hA"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/PCmX6q-gfJ8"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        </div>
        <h2>2. Những video dành cho người mới</h2>
        <div className="list-video">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/tosYNLutaLw"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/YfNnP_I7d8Q"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/2dA4Ju0uV5s"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/JMziwNQHPvA"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        </div>
        <h2>3. Những video tiếng anh nâng cao</h2>
        <div className="list-video">
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/mjFOKA0qmsA"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/wVCEjkyj-Nk"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/93SFYa2aPrU"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
          <div className="video">
            <iframe
              src="https://www.youtube.com/embed/g_duZ1HkPCw"
              allowFullScreen="allowfullscreen"
              mozallowfullscreen="mozallowfullscreen"
              msallowfullscreen="msallowfullscreen"
              oallowfullscreen="oallowfullscreen"
              webkitallowfullscreen="webkitallowfullscreen"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;
