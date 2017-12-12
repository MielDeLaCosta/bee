import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Col, Row, ListGroup, ListGroupItem, Glyphicon } from 'react-bootstrap';
import { Link } from 'react-router';

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
        console.log("add working");
    }

    handleInputTaskChange = (event) => {
        console.log(event)
        this.setState({ inputValue: event.target.value })
        // detecta el input al recibir un cambio
        console.log('lala', event.target.value)
    }

    delete = todoId => (event) => {
        console.log(todoId);
        let erase = this.state.task.slice();
        // se necesita poner el 1 para que tome todas las tareas
        erase.splice(todoId, 1);
        this.setState({ task: erase })
        console.log(erase);
    }

    edit = (event) => {
        console.log('edit');
    }

    render() {    
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <Col xs={12}>
                        <FormGroup bsSize="large">
                            <FormControl type="text" onChange={this.handleInputTaskChange} placeholder="Large text" />
                        </FormGroup>
                    </Col>

                    <Row>
                        <Col xs={6}>
                            <Link to="estado">
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
                                            <Button style={styleDelEdit} onClick={this.delete(idx)}>
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
                    <Link to="resume">
                        <Button type="submit" bsSize="large" bsStyle="warning" style={styleBtnSave}>Guardar lista</Button>
                    </Link>                    
                </Col> 
            </div>
        );
    }
}

export default AddTask