import apiaryReducer from './apiaryReducer';
// Combinar todos los reducers en uno solo
import {combineReducers} from 'redux';

const rootReducer = combineReducers ({
  apiaries : apiaryReducer
})

export default rootReducer;