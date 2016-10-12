// console.log('i am alive!');

import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, hashHistory} from 'react-router';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import io from 'socket.io-client';

import reducer from './reducer';
import {setState} from './action_creators'
import {VotingContainer} from './components/Voting';
import App from './components/App';
// import Voting from './components/Voting';
import {ResultsContainer} from './components/Results';
import  remoteActionMiddleware from './remote_action_middleware';




// store.dispatch({
//   type: 'SET_STATE',
//   state: {
//     vote: {
//       pair: ['Sunshine', '28 Days Later'],
//       tally: {Sunshine: 2}
//     }
//   }
// })

const socket = io(`${location.protocol}//${location.hostname}:8000`);

const createStoreWithMiddleware = applyMiddleware(
  remoteActionMiddleware(socket)
)(createStore);

const store = createStoreWithMiddleware(reducer);

socket.on('state', (state) => {
  store.dispatch(setState(state));
});

const routes = <Route component={App}>
  <Route path="/results" component={ResultsContainer} />
  <Route path="/" component={VotingContainer} />
</Route>

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>{routes}</Router>
  </Provider>,
  document.getElementById('app')
);
