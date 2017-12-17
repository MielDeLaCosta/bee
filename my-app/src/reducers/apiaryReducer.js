import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_APIARIES:
      return action.apiaries;
    default:
      return state;      
  }
}