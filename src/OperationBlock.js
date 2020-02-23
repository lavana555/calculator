import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";

class OperationBlock extends React.Component {


    operation = ["C", "<", "/", "*", "-", "+", "="]

    render = () => {
        let opertaionElements = this.operation.map(o => <Button buttonname={o}
                                                                ChangeOperationsInput={this.props.ChangeOperationsInput}/>)

        return (
            <div className="calc-button-row">
                {opertaionElements}
            </div>
        );
    }
}

export default OperationBlock;
