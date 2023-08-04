import {
	GET_GOAL_30,
	GET_TORNEO_30Zona1,
    GET_TORNEO_30Zona2,
	GET_TORNEO_30ORO1,
	GET_TORNEO_30ORO2,
	GET_TORNEO_30PLATA1,
	GET_TORNEO_30PLATA2,
    GET_FIXTURE_30,
    GET_RESULTS_30,
    GET_RESULTS_302
} from "../actions";

const initialState = {
	goles30: [],
	torneo30Z1: [],
    torneo30Z2: [],
    torneo30Oro1: [],
    torneo30Oro2: [],
    torneo30Plata1: [],
    torneo30Plata2: [],
    fixture30: [],
    results30: [],
    results302: []
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_GOAL_30:
			return {
				...state,
				goles30: action.payload,
			};
		case GET_TORNEO_30Zona1:
			return {
				...state,
				torneo30Z1: action.payload,
			};
        case GET_TORNEO_30Zona2:
            return {
                ...state,
                torneo30Z2: action.payload,
            };
        case GET_TORNEO_30ORO1:
            return {
                ...state,
                torneo30Oro1: action.payload,
            };
        case GET_TORNEO_30ORO2:
            return {
                ...state,
                torneo30Oro2: action.payload,
            };
        case GET_TORNEO_30PLATA1:
            return {
                ...state,
                torneo30Plata1: action.payload,
            };
        case GET_TORNEO_30PLATA2:
            return {
                ...state,
                torneo30Plata2: action.payload,
            };
        case GET_FIXTURE_30:        
            return {
                ...state,
                fixture30: action.payload,
            };
        case GET_RESULTS_30:
            return {
                ...state,
                results30: action.payload,
            }
        case GET_RESULTS_302:
            return {
                ...state,
                results302: action.payload,
            }
		default:
			return state;
	}
}

export default reducer;
