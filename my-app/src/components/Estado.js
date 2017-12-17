import React, {Component} from 'react';
import { Button, ButtonToolbar, Col, Row, Grid,Image } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

const styleBtnReturn = {
    width: 200, 
    marginTop: 60
}

const apiaryBtn = {
    borderRadius: 50,    
    marginTop: 15, 
    backgroundColor: 'gray',
    border: 'none',
    width: 100,
    height: 100,
    fontSize: 22,
    color: 'white'
}

class Estado extends Component {

    constructor(props) {
        super(props);
        console.log('props', this.props);    
    }

    render() {                      
        return (            
            <div>
                <Grid>
                    <Row>
                        <Col xs={6} style={styleHive}>                                                        
                            <ButtonToolbar>                                    
                                <Button style={apiaryBtn}>{this.props.params.id}</Button>                                    
                            </ButtonToolbar>
                        </Col>
                        <Col xs={6} style={styleStates}>
                            <Col xs={12}>
                                <Link to={'/add-task/' + this.props.params.id + '/status/warning'}>
                                    <ButtonToolbar>                                    
                                        <Button bsStyle="warning" style={styleBtnWarning}></Button>                                    
                                    </ButtonToolbar>
                                </Link>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to={'/add-task/' + this.props.params.id + '/status/success'}>
                                        <Button bsStyle="success" style={styleBtnWarning}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                            <Col xs={12}>
                                <ButtonToolbar>
                                    <Link to={'/add-task/' + this.props.params.id + '/status/danger'}>
                                        <Button bsStyle="danger" style={styleBtnWarning}></Button>
                                    </Link>
                                </ButtonToolbar>
                            </Col>
                        </Col>
                    </Row>                
                </Grid>     

                <Col xs={12}>
                    <Link to="/list-hive">
                        <Button type="submit" bsSize="large" style={styleBtnReturn  }>Volver</Button>
                    </Link>                                     
                </Col>        
            </div>            
        );
    }
}


const mapStateToProps = (state) => {
    // vincula el store con los this.props del componente
    return {
        apiaries: state.apiaries
    };
}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Estado);