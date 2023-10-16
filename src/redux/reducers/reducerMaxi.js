import {
	GET_GOAL_MAXI,
	GET_TORNEO_MAXIZona1,
	GET_TORNEO_MAXIZona2,
	GET_TORNEO_MAXIORO1,
	GET_TORNEO_MAXIORO2,
	GET_TORNEO_MAXIPLATA1,
	GET_TORNEO_MAXIPLATA2,
	GET_FIXTURE_MAXI,
	GET_RESULTS_MAXI,
	GET_RESULTS_MAXICOPAORO1,
	GET_RESULTS_MAXICOPAORO2,
} from "../actions";

const initialState = {
	golesMaxi: [],
	torneoMaxiZ1: [],
	torneoMaxiZ2: [],
	torneoMaxiOro1: [],
	torneoMaxiOro2: [],
	torneoMaxiPlata1: [],
	torneoMaxiPlata2: [],
	fixtureMaxi: [],
	resultsMaxi: [],
	resultsMaxiCopaOro1: [],
	resultsMaxiCopaOro2: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case GET_GOAL_MAXI:
			return {
				...state,
				golesMaxi: action.payload,
			};
		case GET_TORNEO_MAXIZona1:
			return {
				...state,
				torneoMaxiZ1: action.payload,
			};
		case GET_TORNEO_MAXIZona2:
			return {
				...state,
				torneoMaxiZ2: action.payload,
			};
		case GET_TORNEO_MAXIORO1:
			return {
				...state,
				torneoMaxiOro1: action.payload,
			};
		case GET_TORNEO_MAXIORO2:
			return {
				...state,
				torneoMaxiOro2: action.payload,
			};
		case GET_TORNEO_MAXIPLATA1:
			return {
				...state,
				torneoMaxiPlata1: action.payload,
			};
		case GET_TORNEO_MAXIPLATA2:
			return {
				...state,
				torneoMaxiPlata2: action.payload,
			};
		case GET_FIXTURE_MAXI:
			return {
				...state,
				fixtureMaxi: action.payload,
			};
		case GET_RESULTS_MAXI:
			return {
				...state,
				resultsMaxi: action.payload,
			};
		case GET_RESULTS_MAXICOPAORO1:
			return {
				...state,
				resultsMaxiCopaOro1: action.payload,
			};
		case GET_RESULTS_MAXICOPAORO2:
			return {
				...state,
				resultsMaxiCopaOro2: action.payload,
			};
		default:
			return state;
	}
}

export default reducer;
