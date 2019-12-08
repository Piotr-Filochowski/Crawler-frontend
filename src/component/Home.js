import React, {Component} from 'react'
import StickyFooter from "./StickyFooter";
import NavTabs from "./NavBar";

class Home extends Component {
    state = {
        dump: "dump",
    };

    render() {
        return (
            <div className="container">
                <NavTabs/>
                <h1>Home! {this.state.dump}</h1>
                <StickyFooter/>
            </div>
        )
    }
}
export default Home