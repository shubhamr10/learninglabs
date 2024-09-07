import { compose, applyMiddleware, legacy_createStore, Middleware } from "redux";
// import logger from "redux-logger";
import { persistStore, persistReducer, PersistConfig } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import {thunk} from "redux-thunk";
import createSageMiddleware, { SagaMiddleware } from "redux-saga";
import { rootSaga } from "./root-saga";


import { rootReducer} from "./rootReducer";

export type RootState = ReturnType<typeof rootReducer>;

type ExtendedPersistConfig = PersistConfig<RootState> & {
    whitelist:(keyof RootState)[]
}
const persistConfig:ExtendedPersistConfig = {
    key:"root",
    storage,
    blacklist:["user"],
    whitelist:["cart"]
}

declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose
    }
}

const sagaMiddleware = createSageMiddleware();

const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleWares = [process.env.NODE_ENV === "development" ? null : null , sagaMiddleware].filter((middleware): middleware is  SagaMiddleware => Boolean(middleware));

// redux thunk setup

// setup for redux devtools extensions
const composedEnchancer = (process.env.NODE_ENV === "development" && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const composedEnchancers = composedEnchancer(applyMiddleware(...middleWares));

export const store = legacy_createStore(
    persistedReducer,
    undefined,
    composedEnchancers
)

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

// import { compose, applyMiddleware, legacy_createStore } from "redux";
// // import logger from "redux-logger";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";

// import { rootReducer } from "./rootReducer";

// const loggerMiddleware  = store => next => action => {
//     if(!action.type){
//         return next(action);
//     }

//     console.log("type: ", action.type);
//     console.log("payload: ", action.payload);
//     next(action);
//     console.log("next state: ", store.getState());
// }

// const persistConfigure = {
//     key:"root",
//     storage,
//     blacklist:["user"],
// }

// const persistedReducer = persistReducer(persistConfigure, rootReducer);

// const middlewares = [loggerMiddleware];
// const composedEnchaner = compose(applyMiddleware(...middlewares));

// export const store = legacy_createStore(persistedReducer, undefined, composedEnchaner);

// export const persistor = persistStore(store);