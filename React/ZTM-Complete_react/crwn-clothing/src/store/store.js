import { compose, applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const loggerMiddleware  = store => next => action => {
    if(!action.type){
        return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload);
    next(action);
    console.log("next state: ", store.getState());
}

const middlewares = [loggerMiddleware];
const composedEnchaner = compose(applyMiddleware(...middlewares));

export const store = legacy_createStore(rootReducer, undefined, composedEnchaner);