import React, { Component } from 'react';
import './App.css';
// importamos que vamos a utilizar de bootstrap
// Debemos escribir los componentes de bootstrap
import { FormGroup, FormControl, Button, Grid, Row, Col, Radio, Image} from 'react-bootstrap'

class Login extends Component {
	render() {
		return (
			<Grid className="Login">
    			<Row className="show-grid">
    				<Col xs={6} xsOffset={3}>
    					<Image className="Brand" src="img/brand.png" responsive />
    				</Col>
      				<Col xs={10} xsOffset={1}>
							<form>
							    <FormGroup>
							    	<FormControl type="text" placeholder="Email ID"/>
							    </FormGroup>
							    <FormGroup>
							    	<FormControl type="text" placeholder="Password"/>
							    </FormGroup>
							    	<Button bsStyle="primary" block><Image src="img/sbee.png"/></Button>
							    <Col xs={6}>
							    	<Radio checked readOnly className="Logintext">Recordar Mi Usuario</Radio>
							    </Col>
							    <Col xs={6}>
							    	<p className="Logintext">¿Olvidaste tus Datos?</p>
							    </Col>
							</form>
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
