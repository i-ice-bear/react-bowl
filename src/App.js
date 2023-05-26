import React from "react";
import "./scss/App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'

const AppComponent = () => {
  return (
    <>
      <Navbar heading={"React Textutils"} />
    </>
  );
};

export default AppComponent;
