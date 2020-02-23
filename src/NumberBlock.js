import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";
import Number from "./Number";

class NumberBlock extends React.Component {

    number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.']

    render = () => {
        let numberElements = this.number.map(nb => <Number ChangedInput={this.props.ChangedInput} value={nb}/>)

        return (
            <div className="calc-button-row">
                {numberElements}
            </div>
        );
    }
}

export default NumberBlock;