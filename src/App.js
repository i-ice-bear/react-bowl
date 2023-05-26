import React from "react";
import "./scss/App.css";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import TextForm from "./components/TextForm";

const AppComponent = () => {
  return (
    <>
      <Navbar heading={"React Textutils"} />
      <TextForm title={"Your text utility"}/>
    </>
  );
};

export default AppComponent;
