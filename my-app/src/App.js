import React, { Component } from 'react';
import './App.css';
// importamos que vamos a utilizar de bootstrap
// Debemos escribir los componentes de bootstrap
import { FormGroup, FormControl} from 'react-bootstrap'

class Login extends Component {
	render() {
		return (
			<form>
			    <FormGroup bsSize="large">
			      <FormControl type="text" placeholder="Large text" />
			    </FormGroup>
			    <FormGroup>
			      <FormControl type="text" placeholder="Normal text" />
			    </FormGroup>
			    <FormGroup bsSize="small">
			      <FormControl type="text" placeholder="Small text" />
			    </FormGroup>
			</form>
		)
	}
}

class App extends Component {
  render() {
    return (
      <div className="App">
      <Login/>
      </div>
    );
  }
}

export default App;
