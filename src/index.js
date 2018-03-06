import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const initialColor = 
{
    color: 'red'
};


const COLOR_CHANGE = 'COLOR_CHANGE';
export const changeColor = (col) =>
({
    type: COLOR_CHANGE,
    payload: { value: col }
});

const colorReducer = (state = initialColor, action) =>
{
  switch(action.type){

    case COLOR_CHANGE:      
      return {...state, color: action.payload.value};

    default:
      return state;
  }
};

const store = createStore(colorReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();

