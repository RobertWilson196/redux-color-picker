import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { changeColor } from './index';

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <button onClick= {()=> this.props.dispatch(changeColor('blue'))}>Set Color</button>
        </div>
        <div>
          <input type="color" name="col_picker" id="col_picker"/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {...state};
}

export default connect(mapStateToProps,null)(App);
