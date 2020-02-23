import React, {Component} from "react"
import PropTypes from "prop-types"

export default class Counter extends Component{
    static propTypes = {
        count: PropTypes.number.isRequired,
        increment: PropTypes.func.isRequired,
        decrement: PropTypes.func.isRequired,
        incrementAsync: PropTypes.func.isRequired
    }

    increment = () => {
        this.props.count;
        const number = this.select.value * 1;
        this.props.increment(number);
    }

    decrement = () => {
        const number = this.select.value * 1;
        this.props.decrement(number);
    }

    incrementOdd = () => {
        const count = this.props.count;
        if (count%2 === 1) {
            const number = this.select.value * 1;
            this.props.increment(number);
        }
    }

    incrementAsync = () => {
        const number = this.select.value * 1;
        this.props.incrementAsync(number)
    }

    render() {
        return (
            <div>
                <p>
                    click {this.props.count} times {' '}
                </p>
                <select name="add" id="addCount" ref={select => this.select = select}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>&nbsp;
                <button onClick={this.increment}>+</button>&nbsp;
                <button onClick={this.decrement}>-</button>&nbsp;
                <button onClick={this.incrementOdd}>increment if odd</button>&nbsp;
                <button onClick={this.incrementAsync}>increment async</button>
            </div>
        );
    }
}