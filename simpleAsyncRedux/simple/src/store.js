import { legacy_createStore,applyMiddleware,compose } from "redux";
import { reducers } from "./reducers";
import thunk from "redux-thunk"


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 export const store = legacy_createStore(reducers,  composeEnhancers( applyMiddleware(thunk)
 ));