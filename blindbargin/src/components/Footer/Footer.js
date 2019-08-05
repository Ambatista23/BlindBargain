import React from "react";
import "./Footer.css";
 
// Setting style to the footer.
var style = {
    backgroundColor: "rgba(31, 31, 35, 0.993",
    borderTop: "7px solid rgb(19, 19, 130)",
    color: "white",
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "80px",
    width: "100%",
}
// Adding a phantom div for a sticky footer
var phantom = {
  display: 'block',
  padding: '20px',
  height: '60px',
  width: '100%',
}

 //Function for the footer.
function Footer({ children }) {
    return (
        <div>
            <div className="title"></div>
            <div style={phantom} />
            <div style={style}>Project in &#169; by Midi-Clorian <a href="https://github.com/IsmaelRvra130" class="fab fa-github"> </a> 
                { children }
            </div>
        </div>
    )
}

export default Footer