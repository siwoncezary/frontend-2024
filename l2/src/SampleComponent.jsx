import { Component } from 'react'
class SampleComonent extends Component {
    constructor(props){
        super(props);
        this.state= {
            counter: 0
        }
    }

    changeCounter = () => {
        this.setState({ counter: this.state.counter + 1})
    }
    render() { 
        return (
            <div>
                <h1>{this.props.title}</h1>
                <p>Counter: {this.state.counter}</p>
                <button onClick={this.changeCounter}>Button</button>
            </div>
        );
    }
}
 
export default SampleComonent;