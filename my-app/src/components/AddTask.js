import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Col, Row, ListGroup, ListGroupItem, Glyphicon, Alert } from 'react-bootstrap';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as apiaryActions from '../actions/apiaryActions'

class AddTask extends Component {

    state = {
        task: [],
        inputValue: ''
    }

    handleSubmit = (event) => {
        // Detiene el envio del contenido del form
        event.preventDefault();
        let task = this.state.task;
        task.push(this.state.inputValue)
        this.setState({ task: task })
    }

    handleInputTaskChange = (event) => {
        console.log(event)
        this.setState({ inputValue: event.target.value })
        // detecta el input al recibir un cambio
        console.log('lala', event.target.value)
    }

    delete = (event) => {
        console.log('delete');
    }

    edit = (event) => {
        console.log('edit');
    }

    changeApiaryStatus = () => {
        this.props.apiaryActions.editApiaryStatus(
            this.props.params.id, 
            this.props.params.status
        )
    }

    render() {
        const styleBtn = {
            width: 120,
            marginTop:10            
        }

        const styleUlLi = {
            marginTop: 50            
        }

        const styleDelEdit = {
            height: 41
        }

        const styleBtnSave = {
            position: 'fixed',
            top: 580,
            right: 120
        }        
    
        return (
            <div>
                
                


                <form onSubmit={this.handleSubmit}>
                    
                    <Col xs={12}>
                    <Alert bsStyle={this.props.params.status}>
                        <h4>{this.props.params.status.toUpperCase()}</h4>                    
                    </Alert>
                        <FormGroup bsSize="large">
                            <FormControl type="text" onChange={this.handleInputTaskChange} placeholder="Large text" />
                        </FormGroup>
                    </Col>

                    <Row>
                        <Col xs={6}>
                            <Link to={"/estado/" + this.props.params.id}>
                                <Button type="submit" bsSize="large" style={styleBtn}>Volver</Button>
                            </Link>                            
                        </Col>
                        <Col xs={6}>
                            <Button type="submit" bsSize="large" bsStyle="warning" style={styleBtn}>Add Task</Button>
                        </Col>
                    </Row>                
                    
                    <Col xs={12} style={styleUlLi}>
                        <ListGroup>
                            {this.state.task.map((element, idx) => {                                    
                                return (
                                    <Row key={idx}>
                                        <Col xs={8}>
                                            <ListGroupItem>{element}</ListGroupItem> 
                                        </Col>
                                        <Col xs={2}>
                                            <Button style={styleDelEdit} onClick={this.delete}>
                                                <Glyphicon glyph="trash"/>
                                            </Button>                                                                                        
                                        </Col>
                                        <Col xs={2}>
                                            <Button style={styleDelEdit} onClick={this.edit}>
                                                <Glyphicon glyph="edit"/>
                                            </Button>                                                                                        
                                        </Col>                                        
                                    </Row>                                                                   
                                )
                            })}
                        </ListGroup>
                    </Col>                           
                </form>                
                <Col xs={12}>
                    <Link to="/list-hive">
                        <Button onClick={this.changeApiaryStatus} type="submit" bsSize="large" bsStyle="warning" style={styleBtnSave}>Guardar lista</Button>
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

// despacho un action que escucha el reducer para devolver el nuevo estado
const mapDispatchToProps = (dispatch) => {
    return {
        apiaryActions: bindActionCreators(apiaryActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);