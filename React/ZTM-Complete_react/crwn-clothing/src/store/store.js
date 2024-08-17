import { compose, applyMiddleware, legacy_createStore } from "redux";
// import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

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

const persistConfigure = {
    key:"root",
    storage,
    blacklist:["user"],
}

const persistedReducer = persistReducer(persistConfigure, rootReducer);

const middlewares = [loggerMiddleware];
const composedEnchaner = compose(applyMiddleware(...middlewares));

export const store = legacy_createStore(persistedReducer, undefined, composedEnchaner);

export const persistor = persistStore(store);