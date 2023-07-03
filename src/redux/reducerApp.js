import { GET_GOAL_LIBRES , GET_TORNEO_LIBRES, GET_GOAL_30, GET_TORNEO_30} from "./actions";

const initialState = {
    glibres: [],
    torneolibres: [],
    goles30: [],
    torneo30: []
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
        case GET_GOAL_30:
            return {
                ...state,
                goles30: action.payload
            }
        case GET_TORNEO_30:
            return {
                ...state,
                torneo30: action.payload
            }
        default:
            return state;
    }
}


export default reducerApp;
