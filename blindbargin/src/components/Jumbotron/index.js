import React from "react";
import "./style.css";
// import Image from "./style.css";

function Jumbotron({ children }) {
  return (
    <div
      style={{ height: "auto", clear: "both", paddingTop: 80, textAlign: "center" }}
      className="jumbotron">
        {/* <Image src={"blindbargin/src/components/Jumbotron/double B.png"} width={500} height={300} mode='fit' />   */}
        <h1>Welcome to Blind Bargin!</h1>
        <h2>No one runs a better auction.</h2>
      {children}
    </div>
  );
}

export default Jumbotron;
