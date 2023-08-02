import { combineReducers } from "redux";
import reducer30 from "./reducer30";
import reducer36 from "./reducer+36";
import reducer40 from "./reducer+40";
import reducerMaxi from "./reducerMaxi";
import reducerLibre from "./reducerLibre";
import reducerU from "./reducerU";
import reducerUsuario from "./reducerUsuario";


const reducerApp = combineReducers({
    reducer30,
    reducer36,
    reducer40,
    reducerMaxi,
    reducerLibre,
    reducerU,
    reducerUsuario,
});

export default reducerApp;
