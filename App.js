import React from "react";
import ReactDOM from "react-dom";
import Info from "./info.js";
import About from "./about.js";
import Interest from "./interest.js";
import Footer from "./footer.js";

function App() {
  return (
    <div>
      <div className="main-container">
        <div className="semi-container">
          <Info />
          <About />
          <Interest />
          <div className="footer-container">
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
