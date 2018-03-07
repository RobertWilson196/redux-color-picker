import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//import provider
//import store
//wrap app with provider (pass store to provider)
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import store from './store';

ReactDOM.render(
        <Provider store={store}>   
            <App />
        </Provider>, document.getElementById('root'));
registerServiceWorker();

