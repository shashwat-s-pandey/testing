// props in class component

import React, { Component } from "react";

class Students2 extends Component {
    render() {
        return (
            <div>
                <h1>Hello, name: {this.props.name}, Rollno: {this.props.rollNo}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default Students2;