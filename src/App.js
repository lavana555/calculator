import React from 'react';
import logo from './logo.svg';
import './App.css';
import ValueBlock from "./ValueBlock";
import NumberBlock from "./NumberBlock";
import OperationBlock from "./OperationBlock";

class App extends React.Component {

    state = {
        counter: '',
        operation: ''

    }
    onChangedNumberInput = (newcounter) => {
        let number = this.state.counter + `${newcounter}`
        this.setState({
            counter: number
        })
    }
    onChangeOperationsInput = (operation) => {

        if (operation === "C") {
            this.setState({
                counter: '',
            })
        } else if (operation === "<") {
            let counter = this.state.counter.toString(this.state.counter)
            let newcounter = counter.substring(0, counter.length - 1)

            this.setState({
                counter: newcounter
            })
        } else if (operation === "=") {
            let blockoperations=["/","*","-","+"]
            if (!blockoperations.includes(this.state.counter.slice(-1))
            )  {
                let newcounter = eval(this.state.counter)
                this.setState({
                    counter: newcounter
                })
            }
        } else {
            let blockoperations=["/","*","-","+"]

            if (!blockoperations.includes(this.state.counter.slice(-1))) {

            let counter = this.state.counter + `${operation}`
            this.setState({
                counter: counter,
                operation: counter
            })
        }
        }
    }

    render = () => {
        return (
            <div className="container">
                <div className="calc-body">
                    <div className="calc-screen">
                        <div className="calc-typed">
                        <ValueBlock counter={this.state.counter}/>
                        </div>
                    </div>
                    <div className="calc-button-row">
                        <OperationBlock ChangeOperationsInput={this.onChangeOperationsInput}/>
                    </div>
                    <div className="calc-button-row">
                        <NumberBlock ChangedInput={this.onChangedNumberInput}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
