import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tachyons/css/tachyons.min.css';
import App from './containers/App';
import { Provider, connect} from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';
import { thunk } from 'redux-thunk';
import { searchRobots, requestRobots } from './reducers';
import reportWebVitals from './reportWebVitals';

const logger = createLogger();
const rootReducer = combineReducers({ searchRobots, requestRobots });
const store = createStore(rootReducer, applyMiddleware(thunk, logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
