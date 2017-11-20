import React, { Component } from 'react';
import './App.css';
// importamos que vamos a utilizar de bootstrap
// Debemos escribir los componentes de bootstrap
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
