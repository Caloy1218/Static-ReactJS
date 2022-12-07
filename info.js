import React from "react";
import ReactDOM from "react-dom";

function Info() {
  return (
    <div>
      <div className="imgContainer">
        <img
          className="imgIcon"
          src="https://images3.alphacoders.com/267/267687.png"
        />
      </div>

      <h1>John Carlo Saquing</h1>
      <h3>Frontend Developer</h3>
      <h5>jcsaquing1218@gmail.com</h5>
      <div className="btn-container">
        <button className="emailBtn">Email</button>
        <button className="linkedInBtn">LinkedIn</button>
      </div>
    </div>
  );
}

export default Info;
