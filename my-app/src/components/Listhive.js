import React, {Component} from 'react';
import {Grid, Row, Col, Image, Button, ButtonToolbar} from 'react-bootstrap';

const hiveStyle = {
    display: 'flex',
    justifyContent:'center'
}

const btnStyle = {
    borderRadius: 50,    
    marginTop: 60,
    width: 100,
    height: 100,
    fontSize: 22
}

const colBtnStyle = {
    display: 'flex',
    justifyContent: 'center'
}

class ListHive extends Component {
    render() {
        return(
            <Grid>
                <Row>
                    <Col xs={12} style={hiveStyle}>                            
                        <Image src="./img/hive.png" responsive />
                    </Col>               
                </Row>            
                <Row>
                    <Col xs={6} style={colBtnStyle}>
                        <ButtonToolbar>                                    
                            <Button style={btnStyle}>1</Button>                                    
                        </ButtonToolbar>
                    </Col>                          
                </Row>    
            </Grid>            
        );
    }
}

export default ListHive;