 import React from 'react';

class CurrencyConvertor extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: '',
            currency: ''
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        const euroAmount = this.state.amount * 0.012;
        alert(`Converting to ${this.state.currency} Amount is ${euroAmount}`);
    }

    render() {
        return (
            <div>
                <h2 style={{color: 'green'}}>Currency Convertor!!!</h2>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>Amount: </label>
                    <input 
                        type="text" 
                        value={this.state.amount}
                        onChange={(e) => this.setState({amount: e.target.value})}
                    />
                    <br/>
                    <label>Currency: </label>
                    <input 
                        type="text"
                        value={this.state.currency}
                        onChange={(e) => this.setState({currency: e.target.value})}
                    />
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default CurrencyConvertor;
