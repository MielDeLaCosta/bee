import * as types from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case types.LOAD_APIARIES:
      return action.apiaries;
    case types.EDIT_APIARY_STATUS:
      return state.map(apiary => {
        let ap = Object.assign({}, apiary);
        if(apiary.id == action.apiary.id) {
          ap.status = action.apiary.status;
        }
        return ap;
      })
    default:
      return state;      
  }
}