import { LOGIN, LOGOUT, GET_NOTICIAS, GET_NOTICIA_DETAIL, CLEAR_NOTICIA_DETAIL } from "../actions";

const initialState = {
	user: null,
	noticias: [],
	noticiaDetail: null,
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
		case GET_NOTICIA_DETAIL:
			return {
				...state,
				noticiaDetail: action.payload,
			};
		case CLEAR_NOTICIA_DETAIL:
			return {
				...state,
				noticiaDetail: null,
			};
		default:
			return state;
	}
}

export default reducer;
