import { combineReducers, configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rocketReducer, { fetchRocketsAPI } from './rockets/rocket';
import missionsReducer from './missions/Mission';

const rootReducer = combineReducers({
  mission: missionsReducer,
  rocketReducer,
});

const myStore = configureStore({ reducer: rootReducer }, applyMiddleware(thunk, logger));
myStore.dispatch(fetchRocketsAPI());

export default myStore;
