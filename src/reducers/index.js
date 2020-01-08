import { combineReducers } from 'redux';
import login from './auth.js';
import { connectRouter } from 'connected-react-router';

const rootReducer = (history) => combineReducers({
    router: connectRouter(history),
    login
});

export default rootReducer;