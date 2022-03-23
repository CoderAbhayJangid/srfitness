import React from "react";
import "./App.css";
import About_us from "./components/About_us";
import Newslater from "./components/Newslater";
import Our_coaches from "./components/Our_coaches";
import Pricing from "./components/Pricing";
import Redbox from "./components/Redbox";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <>
      <div className="container">
        <About_us />
        <Our_coaches />
      </div>
      <Redbox />
      <div className="container">
        <Testimonials />
        <Pricing />
        <Newslater/>
      </div>
    </>
  );
}

export default App;