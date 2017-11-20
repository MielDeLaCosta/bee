import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// importamos que vamos a utilizar de bootstrap
import { Button } from 'react-bootstrap'

class ButtonExample extends Component {
  render() {
    return (
      <Button bsSize="large">Botón de prueba</Button>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonExample />
      </div>
    );
  }
}

export default App;
