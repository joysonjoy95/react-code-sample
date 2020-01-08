import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';

export const history = createBrowserHistory();

const store = () => {
    const sagaMiddleware = createSagaMiddleware();

    return {
        ...createStore(
            rootReducer(history), 
            compose(
                applyMiddleware(
                    routerMiddleware(history),
                    sagaMiddleware
                )
            )
        ),
        runSaga: sagaMiddleware.run(rootSaga)
    }
};

export default store;