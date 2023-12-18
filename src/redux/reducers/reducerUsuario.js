import { LOGIN, LOGOUT, LOGINTEAM, JUGADORES, UPDATE_JUGADOR } from "../actions";

const initialState = {
	user: null,
	jugadores: [],
	updateJugador: {}
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
		case LOGINTEAM:
			return {
				...state,
				user: action.payload,
			}
		case JUGADORES:
			return {
				...state,
				jugadores: action.payload
			}
		case UPDATE_JUGADOR:
			return {
				...state,
				updateJugador: action.payload
			}
        default:
            return state;
    }
}

export default reducer;