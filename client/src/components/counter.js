import React , { Component } from 'react';
import { connect } from 'react-redux';
import { incrementCount , decrementCount } from '../actions';

class Counter extends Component {

    increment() {
        debugger;
        this.props.incrementCount( this.props.count );
    }

    decrement() {
        debugger;
        this.props.decrementCount( this.props.count );
    }

    render() {
debugger;
        const { count } = this.props;
        // const count = this.props.count;

        return (
            <div>
                <h2 className="counter">Counter value: {count}</h2>
                <button onClick={this.increment.bind(this)} className='incrementor'>Increment!</button>
                <button onClick={this.decrement.bind(this)} className="decrement">Decrement!</button>
            </div>
        );
    }
}

function mapStateToProps( state ) {
    debugger;
    return {
        count: state.countReducer.count
    }
}

export default connect( mapStateToProps , { incrementCount , decrementCount } )(Counter);