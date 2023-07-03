import { GET_GOAL_LIBRES , GET_TORNEO_LIBRES} from "./actions";

const initialState = {
    glibres: [],
    torneolibres: [],
}

const reducerApp = (state = initialState, action) => {
    switch (action.type) {
        case GET_GOAL_LIBRES:
            return {
                ...state,
                glibres: action.payload
            }
        case GET_TORNEO_LIBRES:
            return {
                ...state,
                torneolibres: action.payload
            }
        default:
            return state;
    }
}


export default reducerApp;
