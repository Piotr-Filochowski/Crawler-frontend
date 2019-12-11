import React, {Component} from 'react'
import NavBar from "./NavBar";
import StickyFooter from "./StickyFooter";

class History extends Component {
    render() {
        return (
            <div>
                <NavBar/>
                <h1>History!</h1>
                <StickyFooter/>
            </div>
        )
    }
}

export default History