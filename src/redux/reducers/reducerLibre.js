import {
	GET_GOAL_LIBRES,
	GET_TORNEO_LIBRESZona1,
	GET_TORNEO_LIBRESZona2,
	GET_TORNEO_LIBRESORO1,
	GET_TORNEO_LIBRESORO2,
	GET_TORNEO_LIBRESPLATA1,
	GET_TORNEO_LIBRESPLATA2,
	GET_FIXTURE_LIBRE,
	GET_RESULTS,
	GET_RESULTS2,
	GET_RESULTSCOPAORO1,
	GET_RESULTSCOPAORO2,
	GET_RESULTSCOPAPLATA1,
	GET_RESULTSCOPAPLATA2,
	
} from "../actions";

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
	results2: [],
	resultscopaOro1: [],
	resultscopaOro2: [],
	resultscopaPlata1: [],
	resultscopaPlata2: [],
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
		case GET_RESULTS:
			return {
				...state,
				results: action.payload,
			}
		case GET_RESULTS2:
			return {
				...state,
				results2: action.payload,
			}
		case GET_RESULTSCOPAORO1:
			return {
				...state,
				resultscopaOro1: action.payload,
			}
		case GET_RESULTSCOPAORO2:
			return {
				...state,
				resultscopaOro2: action.payload,
			}
		case GET_RESULTSCOPAPLATA1:
			return {
				...state,
				resultscopaPlata1: action.payload,
			}
		case GET_RESULTSCOPAPLATA2:
			return {
				...state,
				resultscopaPlata2: action.payload,
			}
		default:
			return state;
	}
};

export default reducerApp;
