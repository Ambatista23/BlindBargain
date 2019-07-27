import React from 'react';
import Jumbotron from "../../blindbargin/src/components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "../../blindbargin/src/components/Demo";
import MenuItem from "../../blindbargin/src/components/Demo";
import Demo from "../../blindbargin/src/components/Demo";
import './App.css';
import PrimarySearchAppBar from '../../blindbargin/src/components/Demo';

function App() {

  return (
    <Router>
      <div>
        <Demo>
          {PrimarySearchAppBar}
        <Menu>
          <MenuItem />
          </Menu> />
          </Demo>
        
        
        <Jumbotron />
      </div>
    </Router>
 );
}




export default App;
