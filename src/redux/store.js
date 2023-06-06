import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerApp from "./reducerApp";

export const store = createStore(
    reducerApp,
    composeWithDevTools(applyMiddleware(thunk))
);