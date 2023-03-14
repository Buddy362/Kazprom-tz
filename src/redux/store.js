import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga';
import userReducer from "./userReducer";
import { inputReducer } from "./inputReducer";

import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    user: userReducer,
    input: inputReducer,
});

const store = configureStore({ reducer: rootReducer, middleware: [sagaMiddleware] });
sagaMiddleware.run(rootSaga);

export default store;