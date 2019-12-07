import React from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import Login from './component/Login'

function App() {
  return (
      <Router>
        <div className={"container"}>
          <ul>
            <li>
              <Link to="/">Login></Link>
            </li>
            <li>
              <Link to="/home">Home></Link>
            </li>
            <li>
              <Link to="/about">About></Link>
            </li>
          </ul>
          <Route exact path="/" component={Login}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/home" component={Home}/>
        </div>
      </Router>
  );
}

export default App;
