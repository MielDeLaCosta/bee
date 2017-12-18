// evita que mute el state de redux por error
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/rootReducer';
import { composeWithDevTools } from 'redux-devtools-extension';

export default function (){
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(
      applyMiddleware(
        reduxImmutableStateInvariant()
      )
    )
  )

  return store;
}