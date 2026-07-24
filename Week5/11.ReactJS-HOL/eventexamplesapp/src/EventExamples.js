 import React from 'react';

class EventExamples extends React.Component {

    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
        alert('Hello Member!');
    }

    decrement() {
        this.setState({ count: this.state.count - 1 });
    }

    sayWelcome(msg) {
        alert(msg);
    }

    onPress(e) {
        alert('I was clicked');
    }

    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={() => this.increment()}>Increment</button><br/>
                <button onClick={() => this.decrement()}>Decrement</button><br/>
                <button onClick={() => this.sayWelcome('welcome')}>Say welcome</button><br/>
                <button onMouseDown={(e) => this.onPress(e)}>Click on me</button>
            </div>
        );
    }
}

export default EventExamples;