import React, { Component } from 'react';
import './App.css';
import { FormGroup, FormControl, Button, Grid, Row, Col, Radio, Image} from 'react-bootstrap';
import { Link } from 'react-router';

class Login extends Component {

	// siguiente pagina
    map = (event) => {
        console.log('working');
    }

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
									<Link to="map">
                                        <Button bsStyle="primary" block onClick={this.map}><Image src="img/sbee.png"/></Button>
                                    </Link>
							    	
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

export default Login;