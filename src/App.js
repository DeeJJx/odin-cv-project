import React, { Component } from 'react';
import './App.css';
import General from './components/General';
import uniqid from "uniqid";

class App extends Component {
  constructor(props){
    super(props);
  }


  render() {
    return (
      <div className="App">
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

export default App;
