import React from 'react';
import Jumbotron from "../../blindbargin/src/components/Jumbotron";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from "../../blindbargin/src/components/Demo";
import MenuItem from "../../blindbargin/src/components/Demo";
import Demo from "../../blindbargin/src/components/Demo";
import './App.css';
import MediaCard from "../../blindbargin/src/components/Card/Card";
import Fragment from '../../blindbargin/src/components/Dialog/CreateItem';
import SimpleContainer from '../../blindbargin/src/components/WebContent';
import Login from './components/Users/Login';
import Signup from './components/Users/Signup';
import Profile from './components/Users/Profile';
import Dashboard from './components/Users/Dashboard';
import Errorpage from './components/Users/Errorpage';

function App() {

  return (
    <Router>
      <Switch>
        <Route  exact path="/" component={Dashboard}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/signup" component={Signup}/>
        <Route path="/login" component={Login}/>
        <Route path="/*" component={Errorpage}/>
      </Switch>
      <div>
        <Demo>
          <Menu>
          <MenuItem />
          </Menu>
          <Fragment />
        </Demo>
        <Jumbotron />
        <SimpleContainer>
        <MediaCard></MediaCard>
        </SimpleContainer>
      </div>
    </Router>
 );
}




export default App;
