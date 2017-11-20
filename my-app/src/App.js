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

class AddTask extends Component {
  render() {
    return (
      <div>Aqui agregaremos task :D</div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <ButtonExample />
        <AddTask />
      </div>
    );
  }
}

export default App;
