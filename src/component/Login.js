import React from 'react'

export default class Login extends React.Component {

    state = {
        login: ""
    }

    handleChange = (e) => {
        console.log("e")
        this.setState({
            login: e.target.value
        })
    }


    handleSubmit = (e) => {
        e.preventDefault()
        console.log("sydm")
    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleChange}/>
                    <button>Submit</button>
                </form>
            </>
        )
    }
}