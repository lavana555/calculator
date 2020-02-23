import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from "./Button";

class Number extends React.Component {

     SetValue=()=>{
     this.props.ChangedInput(this.props.value)
    }


    render = () => {


        return (
            <div class="button" onClick={this.SetValue}>
              {this.props.value}
            </div>
        );
    }
}

export default Number;