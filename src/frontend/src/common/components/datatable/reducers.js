/* redux lib */
import {combineReducers} from 'redux';

/* custom */
import * as actions from './actions';

/* this is how the state looks like */
export const initialState = {
  'isFetching': false,
  'count': 0,
  'next': null,
  'previous': null,
  'results': [],
  'errors': []
}

/* reducers */
const fetchData = (state = initialState, action) => {
  switch (action.type) {
    case actions.FETCH_DATA:
      return Object.assign({}, state, {'isFetching': true});
    case actions.FETCH_DATA_SUCCESS:
      return Object.assign({}, state, action.response, {'isFetching': false});
    case actions.FETCH_DATA_FAIL:
      return Object.assign({}, state, action.response, {'isFetching': false});
    default:
      return state;
  }
}

/* root reducer */
export const reducers = combineReducers({fetchData});
