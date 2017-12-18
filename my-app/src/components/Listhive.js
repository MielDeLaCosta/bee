import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
// import para vincular mi componente a redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router'

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
                    {
                        this.props.apiaries.map(apiary => {
                            return (
                                <Col key={apiary.id} xs={6} style={colBtnStyle}>
                                    <ButtonToolbar>                                    
                                        <Link to={'estado/' + apiary.id}>
                                            <Button style={btnStyle} bsStyle={apiary.status}>{apiary.name}</Button>                                    
                                        </Link>
                                    </ButtonToolbar>
                                </Col>                          
                            )
                        }) 
                    }                    
                </Row>    
            </Grid>            
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

export default connect(mapStateToProps, mapDispatchToProps)(ListHive);