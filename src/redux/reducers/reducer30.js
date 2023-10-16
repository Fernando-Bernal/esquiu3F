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
    GET_RESULTS_302,
    GET_RESULTS_30COPAORO1, 
    GET_RESULTS_30COPAORO2,
    GET_RESULTS_30COPAPLATA1,
    GET_RESULTS_30COPAPLATA2,
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
    results302: [],
    results30CopaOro1: [],
    results30CopaOro2: [],
    results30CopaPlata1: [],
    results30CopaPlata2: []
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
        case GET_RESULTS_30COPAORO1:
            return {
                ...state,
                results30CopaOro1: action.payload,
            }
        case GET_RESULTS_30COPAORO2:
            return {
                ...state,
                results30CopaOro2: action.payload,
            }
        case GET_RESULTS_30COPAPLATA1:
            return {
                ...state,
                results30CopaPlata1: action.payload,
            }
        case GET_RESULTS_30COPAPLATA2:
            return {
                ...state,
                results30CopaPlata2: action.payload,
            }
		default:
			return state;
	}
}

export default reducer;
