    
import React from "react";
import "./style.css";
 
function Nav() {
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                React BlindBidder 
            </a><br></br><br></br>
            <a className="navbar-brand" href="/dashboard">My Dashboard
            </a>
        </nav>
    );
}

export default Nav;