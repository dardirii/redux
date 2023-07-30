import thunk from "redux-thunk";
import counterReducer from "./Counter/reducer"
import {applyMiddleware, combineReducers, compose, createStore } from 'redux'

let rootReducers = combineReducers({
    counter: counterReducer
});

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose
let store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunk)));

export default store 