import React, { Component } from 'react';
import './App.css';
import General from './components/input/General';
import uniqid from "uniqid";

class InputMain extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="input-main">
        <header>
          <h1>CV Builder</h1>
        </header>
        <main>
          <General />
        </main>
        <footer>
          This is the footer
        </footer>
      </div>
    );
  }
}

export default InputMain;
