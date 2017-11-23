import React, {Component} from 'react';
import { Button, ButtonToolbar, Col, Row, Grid } from 'react-bootstrap';
import { Link } from 'react-router';

class Estado extends Component {

    render() {
        const styleBtnWarning = {
            borderRadius: 50,
            padding: 40,
            marginBottom: 20,
            marginTop: 20       
        }

        const styleStates = {
            marginTop: 150
        }

        const styleHive = {
            marginTop: 320
        }

        return (
            <div>

                <Grid>
                    <Row>
                        <Col xs={6} style={styleHive}>
                            Colmena
                        </Col>
                        <Col xs={6} style={styleStates}>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to="add-task">
                                        <Button bsStyle="warning" style={styleBtnWarning}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to="add-task">
                                        <Button bsStyle="success" style={styleBtnWarning}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to="add-task">
                                        <Button bsStyle="danger" style={styleBtnWarning}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                        </Col>
                    </Row>
                
                </Grid>
            </div>
        );
    }
}

export default Estado