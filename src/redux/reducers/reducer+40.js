import {
	GET_GOAL_40,
	GET_TORNEO_40Zona1,
	GET_TORNEO_40Zona2,
	GET_TORNEO_40ORO1,
	GET_TORNEO_40ORO2,
	GET_TORNEO_40PLATA1,
	GET_TORNEO_40PLATA2,
	GET_FIXTURE_40,
	GET_RESULTS_40,
} from "../actions";

const initialState = {
	goles40: [],
	torneo40Z1: [],
	torneo40Z2: [],
	torneo40Oro1: [],
	torneo40Oro2: [],
	torneo40Plata1: [],
	torneo40Plata2: [],
	fixture40: [],
	results40: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_GOAL_40:
			return {
				...state,
				goles40: action.payload,
			};
		case GET_TORNEO_40Zona1:
			return {
				...state,
				torneo40Z1: action.payload,
			};
		case GET_TORNEO_40Zona2:
			return {
				...state,
				torneo40Z2: action.payload,
			};
		case GET_TORNEO_40ORO1:
			return {
				...state,
				torneo40Oro1: action.payload,
			};
		case GET_TORNEO_40ORO2:
			return {
				...state,
				torneo40Oro2: action.payload,
			};
		case GET_TORNEO_40PLATA1:
			return {
				...state,
				torneo40Plata1: action.payload,
			};
		case GET_TORNEO_40PLATA2:
			return {
				...state,
				torneo40Plata2: action.payload,
			};
		case GET_FIXTURE_40:
			return {
				...state,
				fixture40: action.payload,
			};
		case GET_RESULTS_40:
			return {
				...state,
				results40: action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
