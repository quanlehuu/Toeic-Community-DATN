import React, { useState, useEffect } from "react";
import Home from "../components/Home";
import LandingPage from "../components/LandingPage";

const Index = () => {
  const [user, setUser] = useState("not-defined");

  useEffect(() => {
    setUser(localStorage.getItem("username"));
  }, []);

  if (user === "not-defined") {
    return null;
  }

  if (user) {
    return <Home />;
  }
  return <LandingPage />;
};

export default Index;
