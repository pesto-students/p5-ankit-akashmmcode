import { applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import reducers from "./reducers";

const logger = createLogger();

//the whole state of the app is mantained in the store
const store = createStore(reducers, applyMiddleware(logger));

export default store;
