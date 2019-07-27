import React from "react";
import "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 220, clear: "both", paddingTop: 80, textAlign: "center" }}
      className="jumbotron">
        
        <h1>Welcome to Blind Bargin!</h1>
        <h2>No one runs a better auction.</h2>
      {children}
    </div>
  );
}

export default Jumbotron;
