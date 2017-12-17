import * as types from './types';
import apiaryData from '../data/apiary';

// Carga la data
export const loadApiaries = () => {
  return {
    type: types.LOAD_APIARIES,
    apiaries: apiaryData
  }
}