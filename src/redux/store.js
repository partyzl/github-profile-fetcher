import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reposReducer from './reducer';

const store = createStore(reposReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
