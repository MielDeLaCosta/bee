import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <strong>Desde App</strong>
        {this.props.children}
      </div>
    );
  }
}

export default App;
