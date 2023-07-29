import { LOGIN, LOGOUT, GET_NOTICIAS } from "../actions";

const initialState = {
	user: null,
	noticias: [],
};

function reducer(state = initialState, action) {
	switch (action.type) {
		case LOGIN:
			return {
				...state,
				user: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				user: null,
			};
		case GET_NOTICIAS:
			return {
				...state,
				noticias: action.payload,
			};
		case "RESTORE_REDUCER_U":
			return action.payload;
		default:
			return state;
	}
}

export default reducer;
