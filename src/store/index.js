import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger"
import thunk from "redux-thunk"
import promise from "redux-promise-middleware"
import rootReducer from "../reducers"

const middleware = applyMiddleware(promise(), thunk, logger())
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), middleware);

export default store;
