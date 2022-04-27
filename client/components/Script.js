import { useEffect } from "react";

const Script = ({ src }) => {
  useEffect(() => {
    const s = document.createElement("script");
    s.setAttribute("src", src);

    const timeout = setTimeout(() => {
      document.querySelector("body").appendChild(s);
    }, 100);

    return () => {
      clearTimeout(timeout);
      s.remove();
    };
  }, [src]);
  return null;
};

export default Script;
