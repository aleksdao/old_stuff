import { createStore, combineReducers, compose } from 'redux';
import { searchTextReducer, todosReducer, showCompletedReducer } from 'reducers';

export let configureStore = () => {

  let reducer = combineReducers({
    searchText: searchTextReducer,
    todos: todosReducer,
    showCompleted: showCompletedReducer
  })

  let store = createStore(reducer, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;

}
