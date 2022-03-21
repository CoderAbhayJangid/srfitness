import React from "react";
import "./App.css";
import About_us from "./components/About_us";
import Our_coaches from "./components/Our_coaches";
import Redbox from "./components/Redbox";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="container">
        <About_us />
      </div>
      <div className="container">
        <Our_coaches />
        <Testimonials/>
      </div>
      <Redbox />
    </>
  );
}

export default App;