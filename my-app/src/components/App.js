import React, { Component } from 'react';
import {Image} from 'react-bootstrap'
import './App.css';

class App extends Component {
  render() {
    const styleBee = {
      marginLeft: 150,
      marginBottom: 30,
      marginTop: 30,
      width: 80
    }

    return (
      <div className="App">
        <Image src="./img/bee.png" style={styleBee} responsive />
        {this.props.children}
      </div>
    );
  }
}

export default App;
