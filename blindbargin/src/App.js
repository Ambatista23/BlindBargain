import React from 'react';
import Nav from "../../blindbargin/src/components/Nav";
import Jumbotron from "../../blindbargin/src/components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

function App() {

  return (
    <Router>
      <div>
        <Nav />
        <Jumbotron />
      </div>
    </Router>
 );
}




export default App;
