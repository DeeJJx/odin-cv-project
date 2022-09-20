import React, { Component } from 'react';
import './App.css';
import Main from './components/Main';

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
          <Main />
        </main>
        <footer>
          This is the footer
        </footer>
      </div>
    );
  }
}

export default App;
