import { combineReducers } from 'redux';
import routesReducer from './routesReducer';

const allReducers = combineReducers({
    routes: routesReducer,
});

export default allReducers;