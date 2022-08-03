import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootRdecer = combineReducers({
});

const Store = createStore(
    rootRdecer,
    {},
    composeWithDevTools(applyMiddleware(thunk))
);

export default Store;