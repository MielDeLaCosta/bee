import * as types from './types';
import apiaryData from '../data/apiary';

// Carga la data
export const loadApiaries = () => {
  return {
    type: types.LOAD_APIARIES,
    apiaries: apiaryData
  }
}

export const editApiaryStatus = (id, status) => {
  return {
    type: types.EDIT_APIARY_STATUS,
    apiary: {
      status: status,
      id: id
    }
  }
}
