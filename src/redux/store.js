import { createStore,applyMiddleware,compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import newsReducer from "./reducers";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
    combineReducers({
        news: newsReducer
    }),
    composeEnhancers(applyMiddleware(thunk)));