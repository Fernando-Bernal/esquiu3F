import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerApp from "./reducerApp"
import { persistStore, persistReducer , purgeStoredState} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, reducerApp);

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

//const persistor = purgeStoredState(persistConfig);
const persistor = persistStore(store);

export default store;
export { persistor };