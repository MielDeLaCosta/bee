import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';

// devuelve un store de redux
const reduxStore = configureStore()

ReactDOM.render(
    <Provider store={reduxStore}>
        <Router history={browserHistory} routes={routes} />    
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
