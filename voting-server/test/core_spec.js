import {expect} from 'chai';
import {List, Map} from 'immutable';


import {setEntries, next, vote} from '../src/core';

describe('application logic', () => {
  describe('setEntries', () => {

    it('adds the entries to the state', () => {
      const state = Map();
      const entries = List.of('Trainspotting', '28 Days Later')
      const nextState = setEntries(state, entries);
      expect(nextState).to.equal(Map({
        entries: List.of('Trainspotting', '28 Days Later')
      }));
    })
  })
  describe('next', () => {
    it('takes the next two entries under vote', () => {
      const state = Map({
        entries: List.of('Trainspotting', '28 Days Later', 'Sunshine')
      });
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        entries: List.of('Sunshine'),
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later')
        })
      }))
    })

    it('puts the winner back into the entries list', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 2,
            '28 Days later': 0
          })
        }),
        entries: List.of('Sunshine', 'Moonshine')
      })
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Moonshine')
        }),
        entries: List.of('Trainspotting')
      }))
    })

    it('puts both entries back into the entries list if the vote is a tie', () => {
      const state = Map({
        vote: Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 2,
            '28 Days Later': 2
          })
        }),
        entries: List.of('Sunshine', 'Moonshine')
      })
      const nextState = next(state);
      expect(nextState).to.equal(Map({
        vote: Map({
          pair: List.of('Sunshine', 'Moonshine')
        }),
        entries: List.of('Trainspotting', '28 Days Later')
      }))
    })

    it('marks winner when just one entry left', () => {
    const state = Map({
      vote: Map({
        pair: List.of('Trainspotting', '28 Days Later'),
        tally: Map({
          'Trainspotting': 4,
          '28 Days Later': 2
        })
      }),
      entries: List()
    });
    const nextState = next(state);
    expect(nextState).to.equal(Map({
      winner: 'Trainspotting'
    }));
  });

  })

  describe('vote', () => {
    it('tallies a vote', () => {
      const state = Map({
          pair: List.of('Trainspotting', '28 Days Later')
        })
      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 1
          })
        })
      )
    })
    it ('increments if there is an existing vote', () => {
      const state = Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 1
          })
        })

      const nextState = vote(state, 'Trainspotting');
      expect(nextState).to.equal(Map({
          pair: List.of('Trainspotting', '28 Days Later'),
          tally: Map({
            'Trainspotting': 2
          })
        }))
    })

  })

})
