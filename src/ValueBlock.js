import React from 'react';
import logo from './logo.svg';
import './App.css';

class ValueBlock extends React.Component {



    render = () => {


        return (
            <div className="inputValue">
                {this.props.counter}

            </div>
        );
    }
}
export default ValueBlock;
