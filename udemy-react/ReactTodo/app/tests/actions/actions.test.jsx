import expect from 'expect';
import { setSearchText, addTodo, toggleShowCompleted, toggleTodo } from 'actions';

describe('Actions', () => {
  it ('should generate search text action', () => {

    let action = {
      type: 'SET_SEARCH_TEXT',
      searchText: 'Some search text'
    }

    let res = setSearchText(action.searchText);

    expect(res).toEqual(action);

  })

  it ('should generate an add todo action', () => {

    let action = {
      type: 'ADD_TODO',
      text: 'Put money in bank'
    };

    let res = addTodo(action.text);

    expect(res).toEqual(action);

  })

  it ('should generate a toggle completed action', () => {

    let action = {
      type: 'TOGGLE_SHOW_COMPLETED'
    };

    let res = toggleShowCompleted();

    expect(res).toEqual(action);

  })

  it ('should generate a toggle todo action', () => {

    let action = {
      type: 'TOGGLE_TODO',
      id: 123
    };

    let res = toggleTodo(action.id);

    expect(res).toEqual(action);

  })

})
