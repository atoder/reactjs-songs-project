import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

// my own components
import App from './components/App';
import reducers from './reducers';

// wrapping the app with provider and pass a single store, store
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.querySelector('#root')
);