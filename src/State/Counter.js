import React, { Component } from "react";

class Counter extends Component {

    constructor() {
        super()
        this.state = {
            marks: 5
        }
    }

    increment() {
        // this.state.marks = this.state.marks + 1      --> this is wrong

        this.setState((previousState) => ({
            marks: previousState.marks + 1
        }),
        () => {
            console.log("Callback marks " + this.state.marks)
        }
        )
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }

    render() {
        return(
            <div>
                <h1>Marks = {this.state.marks}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
                {/* <button onClick={() => this.increment()}>Increment</button> */}
            </div> 
        )
    }
}

export default Counter;