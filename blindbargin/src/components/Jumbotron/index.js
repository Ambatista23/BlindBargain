import React from "react";
import "./style.css";
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >somthing to see
      {children}
    </div>
  );
}

export default Jumbotron;
