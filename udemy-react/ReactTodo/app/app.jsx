var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import { Provider } from 'react-redux';

var TodoApp = require('TodoApp');

import { addTodo, toggleShowCompleted, setSearchText, toggleTodo } from 'actions';
import {configureStore} from 'configureStore';

let store = configureStore();

store.subscribe(() => {
  console.log('new state', store.getState());
})

store.dispatch(addTodo('walk the dog'));
store.dispatch(setSearchText('dog'));
store.dispatch(toggleShowCompleted());

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <Provider store={store}>
    <TodoApp/>
  </Provider>,
  document.getElementById('app')
);
