import { compose, applyMiddleware, legacy_createStore } from "redux";
import logger from "redux-logger";

import { rootReducer } from "./rootReducer";

const middlewares = [logger];
const composedEnchaner = compose(applyMiddleware(...middlewares));

export const store = legacy_createStore(rootReducer, undefined, composedEnchaner);