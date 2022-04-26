import Head from "next/head";
import { useEffect, useRef } from "react";
import "../global.css";

function MyApp({ Component, pageProps }) {
  const firstMount = useRef(true);

  useEffect(() => {
    document.querySelector("html").classList.remove("remove-transition");
    setTimeout(() => {
      document.querySelector("#app")?.setAttribute("style", "opacity: 1");
    }, 1000);
  });

  if (typeof document !== "undefined" && !firstMount.current) {
    document.querySelector("html").classList.add("remove-transition");
    document?.querySelector("#app").setAttribute("style", "opacity: 0");
    document.querySelectorAll(`link[href^="/css"]`).forEach((el) => {
      el.remove();
    });
    firstMount.current = false;
  }
  return (
    <>
      <Head>
        <title>Toeic Community</title>
      </Head>
      <div id="app" className="app">
        <Component {...pageProps} />
      </div>
    </>
  );
}

export default MyApp;
