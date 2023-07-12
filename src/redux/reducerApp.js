import {
	GET_GOAL_LIBRES,
	GET_TORNEO_LIBRESZona1,
	GET_TORNEO_LIBRESZona2,
	GET_TORNEO_LIBRESORO1,
	GET_TORNEO_LIBRESORO2,
	GET_TORNEO_LIBRESPLATA1,
	GET_TORNEO_LIBRESPLATA2,
	GET_FIXTURE_LIBRE,

	GET_GOAL_30,
	GET_TORNEO_30Z1,
    GET_TORNEO_30Z2,
	GET_RESULTS,
	GET_NOTICIAS,
} from "./actions";

const initialState = {
	glibres: [],
	torneolibresZ1: [],
	torneolibresZ2: [],
	torneolibresOro1: [],
	torneolibresOro2: [],
	torneolibresPlata1: [],
	torneolibresPlata2: [],
	fixtureLibre: [],
	results: [],
	noticias: [],

	goles30: [],
	torneo30Z1: [],
	torneo30Z2: [],
};

const reducerApp = (state = initialState, action) => {
	switch (action.type) {
		case GET_GOAL_LIBRES:
			return {
				...state,
				glibres: action.payload,
			};
		case GET_TORNEO_LIBRESZona1:
			return {
				...state,
				torneolibresZ1: action.payload,
			};
		case GET_TORNEO_LIBRESZona2:
			return {
				...state,
				torneolibresZ2: action.payload,
			};
		case GET_TORNEO_LIBRESORO1:
			return {
				...state,
				torneolibresOro1: action.payload,
			};
		case GET_TORNEO_LIBRESORO2:
			return {
				...state,
				torneolibresOro2: action.payload,
			};
		case GET_TORNEO_LIBRESPLATA1:
			return {
				...state,
				torneolibresPlata1: action.payload,
			};
		case GET_TORNEO_LIBRESPLATA2:
			return {
				...state,
				torneolibresPlata2: action.payload,
			};
		case GET_FIXTURE_LIBRE:
			return {
				...state,
				fixtureLibre: action.payload,
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
		case GET_RESULTS:
			return {
				...state,
				results: action.payload,
			}
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
