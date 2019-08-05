import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "../../blindbargin/src/components/Demo";
import MenuItem from "../../blindbargin/src/components/Demo";
import Demo from "../../blindbargin/src/components/Demo";
import './App.css';


import Fragment from '../../blindbargin/src/components/Dialog/CreateItem';
import SimpleContainer from '../../blindbargin/src/components/WebContent';

function App() {

  return (
    <Router>
      <div>
        <Demo>
          <Menu>
          <MenuItem />
          </Menu> />
          <Fragment />
        </Demo>
        
        <SimpleContainer>
       
        </SimpleContainer>
      </div>
    </Router>
 );
}
export default App;
