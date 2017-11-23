import React, { Component } from 'react';
import { Button, FormControl, FormGroup, Col, Row, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link } from 'react-router';

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

    render() {
        const styleBtn = {
            backgroundColor: 'darkgrey',
            color: 'white'              
        }

        const styleUlLi = {
            marginTop: 50
        }

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
                                <Button type="submit" bsSize="large">Volver</Button>
                            </Link>                            
                        </Col>
                        <Col xs={6}>
                            <Button type="submit" bsSize="large" style={styleBtn}>Add Task</Button>
                        </Col>
                    </Row>                

                    <Col xs={12} style={styleUlLi}>
                        <ListGroup>
                            {this.state.task.map((element, idx) => {                                    
                                    return <ListGroupItem key={idx}>{element}</ListGroupItem> 
                            })}
                        </ListGroup>
                    </Col>            

                </form>                
            </div>
        );
    }
}

export default AddTask