import { combineReducers } from "redux";
import reducer30 from "./reducer30";
import reducer36 from "./reducer+36";
import reducer40 from "./reducer+40";
import reducerMaxi from "./reducerMaxi";
import reducerBlog from "./reducerBlog";
import reducerLibre from "./reducerLibre";
import reducerU from "./reducerU";


const reducerApp = combineReducers({
    reducer30,
    reducer36,
    reducer40,
    reducerMaxi,
    reducerBlog,
    reducerLibre,
    reducerU,
});

export default reducerApp;
