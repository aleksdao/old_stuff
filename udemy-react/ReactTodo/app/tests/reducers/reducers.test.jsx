import expect from 'expect';
import { searchTextReducer, showCompletedReducer, todosReducer } from 'reducers';
import df from 'deep-freeze-strict';

describe('Reducers', () => {

  describe('searchTextReducer', () => {

    it('should set searchText', () => {

      let initialState = '';

      let action = {
        type: 'SET_SEARCH_TEXT',
        searchText: 'Chores'
      }

      let res = searchTextReducer(df(''), df(action));

      expect(res).toEqual(action.searchText);


    })

  })

  describe('toggleShowCompleted', () => {

    it('should toggle show completed boolean', () => {

      let action = {
        type: 'TOGGLE_SHOW_COMPLETED'
      }

      let res = showCompletedReducer(df(false), df(action));

      expect(res).toEqual(true);

    })

  })


  describe('todosReducer', () => {

    it('should add new todo', () => {

      let action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      }

      let res = todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);

    })

    it('should toggle todo status', () => {

      let todos = [
        {
          text: 'Walk the dog',
          id: '123',
          completed: true,
          createdAt: 123,
          completedAt: 125
        },
        {
          text: 'Mow the lawn',
          id: 2,
          completed: true
        }
      ]

      let action = {
        type: 'TOGGLE_TODO',
        id: '123'
      }

      let res = todosReducer(df(todos), df(action));

      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);


    })



  })



})
