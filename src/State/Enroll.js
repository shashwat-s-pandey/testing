import React, { Component } from "react";

class Enroll extends Component {

    constructor() {
        super()
        this.state = {      // used to manage the message
            Message: "Enroll Student"
        }
    }

    enrollStudent() {
        this.setState({     // used to update the message
            Message: "Student is enrolled"
        })
    }

    render() {
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={()=> this.enrollStudent()}>Enroll</button>
            </div>
        )
    }
}

export default Enroll;