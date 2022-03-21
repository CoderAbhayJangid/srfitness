import React from "react";
import "./App.css";
import About_us from "./components/About_us";
import Our_coaches from "./components/Our_coaches";
import Redbox from "./components/Redbox";

const App = () => {
  return (
    <>
      <div className="container">
        <About_us />
      </div>
      <Redbox />
      <div className="container">
        <Our_coaches />
      </div>
    </>
  );
}

export default App;