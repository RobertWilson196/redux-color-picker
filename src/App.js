import React, { Component } from 'react';
import './App.css';
// import connect from react-redux
// import files as needed
// mapStateToProps
// mapDispatchToProps
// wrap the app in connect

import { connect } from 'react-redux';
import { changeColor } from './store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentColor: "#000000"
    }
    setCurrentColor(e) {
      this.state.currentColor = e.target.value;
      console.log(currentColor);

    }
    this.setCurrentColor = this.setCurrentColor.bind(this);
  }
  render() {
    return (
      <div>
        <div id="myBox" className="box"></div>
        <input onClick = {()=> setCurrentColor()}type="color" name="col_picker" id="col_picker"/>
        <button onClick= {()=> this.props.setColor(this.state.currentColor)}>Set Color</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

const mapDispatchToProps = (dispatch) => {
  return {
    setColor: (col) => dispatch(changeColor(col))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
