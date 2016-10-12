import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Stream from './components/Stream';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App';
import Callback from './components/Callback';

const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

const store = configureStore();
store.dispatch(actions.setTracks(tracks));

const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}/>
        <IndexRoute component={Stream}/>
        <Route path="/" component={Stream} />
        <Route path="/callback" component={Callback} />
    </Router>
  </Provider>,
  document.getElementById('app')
);
