import React, { Component } from 'react';
import { Grid, Row, Col, Image, Button, ButtonToolbar } from 'react-bootstrap';
// import para vincular mi componente a redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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
                                <Col xs={6} style={colBtnStyle}>
                                    <ButtonToolbar>                                    
                                        <Button style={btnStyle}>{apiary.name}</Button>                                    
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

}

export default connect(mapStateToProps, mapDispatchToProps)(ListHive);