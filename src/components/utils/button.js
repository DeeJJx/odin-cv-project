import React, { Component } from 'react';
import './App.css';
import General from './components/input/General';
import uniqid from "uniqid";

class Button extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="button">
        <button>
            Submit
        </button>
      </div>
    );
  }
}

export default Button;
