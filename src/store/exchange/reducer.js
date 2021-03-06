import { createReducer } from 'redux-act'

import * as actions from './actions'

const initialState = {
  terms: false,
  fromTime: '00:00',
  toTime: '10:00',
  fromValue: '100',
  toValue: '1',
  exchangeRate: 0.012,
}

export const reducer = createReducer(
  {
    [actions.changeTerms]: state => ({
      ...state,
      terms: !state.terms,
    }),
    [actions.changeFromValue]: (state, payload) => ({
      ...state,
      fromValue: payload,
    }),
    [actions.changeToValue]: (state, payload) => ({
      ...state,
      toValue: payload,
    }),
    [actions.changeFromTime]: (state, payload) => ({
      ...state,
      fromTime: payload,
    }),
    [actions.changeToTime]: (state, payload) => ({
      ...state,
      toTime: payload,
    })
  },
  initialState,
)
