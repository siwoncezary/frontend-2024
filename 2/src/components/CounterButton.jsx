import React, { Component } from "react";

export default class CounterButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        }
    }
    changeState = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.changeState} type={this.props.type}>
                    {this.props.title} {this.state.counter}
                </button>
            </div>
        )
    }
}