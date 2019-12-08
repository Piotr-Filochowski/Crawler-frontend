import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import SignInSide from './component/SignInSide'

function App() {
  return (
      <Router>
        <div className={"container"}>
            <Route exact path="/" component={SignInSide}/>
          <Route exact path="/about" component={About}/>
          <Route exact path="/home" component={Home}/>
        </div>
      </Router>
  );
}

export default App;
