import React, {Component} from 'react'

class Home extends Component {
    state = {
        dump: "dump"
    }

    render() {
        return (
            <div className="container">
                <h1>Home! {this.state.dump}</h1>
            </div>
        )
    }
}

export default Home