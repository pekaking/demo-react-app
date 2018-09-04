import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Example from './components/ExampleComponent';

class App extends Component {
  render() {
    return (
      <div className="application-container">
        <header className="application-header">
          This is a demo React app by Petar.
        </header>
        <div class="application-content">
          <Example />
        </div>
      </div>
    );
  }
}

export default App;
