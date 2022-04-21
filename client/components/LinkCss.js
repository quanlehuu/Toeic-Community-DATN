import React, { useEffect } from "react";

const LinkCss = ({ href }) => {
  useEffect(() => {
    return () => document.querySelector(`link[href="${href}"]`).remove();
  }, []);
  return <link rel="stylesheet" href="/css/login.css" />;
};

export default LinkCss;
