import {expect} from 'chai';
import {List} from 'immutable';
import {Map} from 'immutable';

describe('immutability', () => {
  describe('a list', () => {
    function addMovie (currentState, movie) {
      return currentState.push(movie);
    }

    it('is immutable', () => {
      let state = List.of('John', 'Joel');
      let nextState = addMovie(state, 'Jimmy');

      expect(state).to.equal(List.of('John','Joel'));
      expect(nextState).to.equal(List.of('John','Joel','Jimmy'));
    })
  })
  describe('a tree', () => {

    function addMovie (currentState, movie) {
      return currentState.update('movies', movies => movies.push(movie));
    }

    it('is immutable', () => {
      let state = Map({
        movies: List.of('John', 'Joel')
      })
      let nextState = addMovie(state, 'Jimmy');

      expect(state).to.equal(Map({
        movies: List.of('John', 'Joel')
      }))
      expect(nextState).to.equal(Map({
        movies: List.of('John', 'Joel', 'Jimmy')
      }))
    })
  })
})
