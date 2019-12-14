import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import NewRequest from './component/NewRequest'
import History from './component/History'
import SignInSide from './component/SignInSide'


function App() {

    const [login, setLogin] = useState({
        login: ""
    })

    let setNewLogin = (newLogin) => {
        setLogin({
            login: newLogin
        })
    }

    return (
        <Router>
            <div className={"container"}>
                <Route
                    exact path="/"
                    render={(props) => <SignInSide {...props} setNewLogin={setNewLogin}/>}
                />
                <Route
                    exact path="/history"
                    render={(props) => <History {...props} login={login}/>}
                />
                <Route
                    exact path="/newRequest"
                    render={(props) => <NewRequest {...props} login={login}/>}
                />
            </div>
        </Router>
    );
}

export default App;
