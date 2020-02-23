import React from 'react';
import logo from './logo.svg';
import './App.css';

class Button extends React.Component {

    buttonClick = () => {
        this.props.ChangeOperationsInput(this.props.buttonname)
    }


    render = () => {


        return (

            <div className="button l" onClick={this.buttonClick}>
                {this.props.buttonname}
            </div>


        );
    }
}

export default Button;
