import React, {Component} from 'react';
import { Button, ButtonToolbar, Col, Row, Grid,Image } from 'react-bootstrap';
import { Link } from 'react-router';

class Estado extends Component {

    // mantener la pantalla del color del estado
    state = {
        color: ''
    }

    warning = (event) => {
        this.state.color = '#FFD700'
        console.log(this.state.color);
    }

    success = (event) => {
        this.state.color = '#32CD32'
        console.log(this.state.color);
    }

    danger = (event) => {
        this.state.color = '#DC143C'
        console.log(this.state.color)
    }
    
    render() {               

        const styleBtnWarning = {
            borderRadius: 50,
            padding: 50,
            marginBottom: 15,                
        }

        const styleStates = {
            marginTop: 30
        }

        const styleHive = {
            marginTop: 140,
            display: 'flex',
            justifyContent: 'center'
        }

        return (
                <Grid>
                    <Row>
                        <Col xs={6} style={styleHive}>                            
                            <Image src="./img/hive.png" responsive />
                        </Col>
                        <Col xs={6} style={styleStates}>
                            <Col xs={12}>
                                <Link to="add-task">
                                    <ButtonToolbar>                                    
                                        <Button bsStyle="warning" style={styleBtnWarning} onClick={this.warning}></Button>                                    
                                    </ButtonToolbar>
                                </Link>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to="add-task">
                                        <Button bsStyle="success" style={styleBtnWarning} onClick={this.success}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to="add-task">
                                        <Button bsStyle="danger" style={styleBtnWarning} onClick={this.danger}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                        </Col>
                    </Row>                
                </Grid>            
        );
    }
}

export default Estado