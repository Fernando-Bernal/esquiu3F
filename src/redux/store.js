import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import reducerApp from "./reducers/index"
import reducerUsuario from "./reducers/reducerUsuario";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

export const persistConfig = {
  key: "root",
  storage,
  whitelist: [],
};


const persistedReducer = persistReducer(persistConfig, reducerApp );

const store = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(thunk))
);


const persistor = persistStore(store);

export default store;
export { persistor };