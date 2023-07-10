import {
	GET_GOAL_LIBRES,
	GET_TORNEO_LIBRESZ1,
	GET_TORNEO_LIBRESZ2,
	GET_GOAL_30,
	GET_TORNEO_30Z1,
    GET_TORNEO_30Z2,
	GET_NOTICIAS,
} from "./actions";

const initialState = {
	glibres: [],
	torneolibresZ1: [],
	torneolibresZ2: [],
	goles30: [],
	torneo30Z1: [],
	torneo30Z2: [],
	noticias: [],
};

const reducerApp = (state = initialState, action) => {
	switch (action.type) {
		case GET_GOAL_LIBRES:
			return {
				...state,
				glibres: action.payload,
			};
		case GET_TORNEO_LIBRESZ1:
			return {
				...state,
				torneolibresZ1: action.payload,
			};
		case GET_TORNEO_LIBRESZ2:
			return {
				...state,
				torneolibresZ2: action.payload,
			};
		case GET_GOAL_30:
			return {
				...state,
				goles30: action.payload,
			};
		case GET_TORNEO_30Z1:
			return {
				...state,
				torneo30Z1: action.payload,
			};
        case GET_TORNEO_30Z2:
            return {
                ...state,
                torneo30Z2: action.payload,
            };
		case GET_NOTICIAS:
			return {
				...state,
				noticias: action.payload,
			};
		default:
			return state;
	}
};

export default reducerApp;
