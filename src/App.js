import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NewRequest from './component/NewRequest'
import History from './component/History'
import SignInSide from './component/SignInSide'

function App() {
    return (
        <Router>
            <div className={"container"}>
                <Route exact path="/" component={SignInSide}/>
                <Route exact path="/history" component={History}/>
                <Route exact path="/newRequest" component={NewRequest}/>
            </div>
        </Router>
    );
}

export default App;
