import React, { Component } from 'react';
import './App.css';
// importamos que vamos a utilizar de bootstrap
// Debemos escribir los componentes de bootstrap
import { FormGroup, FormControl, Button, Grid, Row, Col, Radio} from 'react-bootstrap'

class Login extends Component {
	render() {
		return (
			<Grid className="Login">
    			<Row className="show-grid">
      				<Col xs={6} xsOffset={3}>
      					<code>
							<form>
							    <FormGroup>
							      <FormControl type="text" placeholder="Email ID"/>
							    </FormGroup>
							    <FormGroup>
							      <FormControl type="text" placeholder="Password"/>
							    </FormGroup>
							    <Button bsSize="large" block>Block level button</Button>
							    <Radio checked readOnly>Recordar Mi Usuario</Radio>
							    <p>¿Olvidaste tus Datos?</p>
							</form>
						</code>
					</Col>
				</Row>
			</Grid>
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
