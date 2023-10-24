import {
  GET_GOAL_36,
  GET_TORNEO_36Zona1,
  GET_TORNEO_36Zona2,
  GET_TORNEO_36ORO1,
  GET_TORNEO_36ORO2,
  GET_TORNEO_36PLATA1,
  GET_TORNEO_36PLATA2,
  GET_FIXTURE_36,
  GET_RESULTS_36,
  GET_RESULTS_36COPAORO1,
  GET_RESULTS_36COPAORO2,
} from "../actions";


const initialState = {
    goles36: [],
    torneo36Z1: [],
    torneo36Z2: [],
    torneo36Oro1: [],
    torneo36Oro2: [],
    torneo36Plata1: [],
    torneo36Plata2: [],
    fixture36: [],
    results36: [],
    results36CopaOro1: [],
    results36CopaOro2: [],
}
function reducer(state = initialState, action) {
    switch (action.type) {
      case GET_GOAL_36:
        return {
          ...state,
          goles36: action.payload,
        }
      case GET_TORNEO_36Zona1:
        return {
          ...state,
          torneo36Z1: action.payload,
        }
      case GET_TORNEO_36Zona2:
        return {
          ...state,
          torneo36Z2: action.payload,
        }
      case GET_TORNEO_36ORO1:
        return {
          ...state,
          torneo36Oro1: action.payload,
        }
      case GET_TORNEO_36ORO2:
        return {
          ...state,
          torneo36Oro2: action.payload,
        }
      case GET_TORNEO_36PLATA1:
        return {
          ...state,
          torneo36Plata1: action.payload,
        }
      case GET_TORNEO_36PLATA2:
        return {
          ...state,
          torneo36Plata2: action.payload,
        }
      case GET_FIXTURE_36:
        return {
          ...state,
          fixture36: action.payload,
        }
      case GET_RESULTS_36:
        return {
          ...state,
          results36: action.payload,
        }
      case GET_RESULTS_36COPAORO1:
        return {
          ...state,
          results36CopaOro1: action.payload,
        }
      case GET_RESULTS_36COPAORO2:
        return {
          ...state,
          results36CopaOro2: action.payload,
        }
      default:
        return state
    }
  }
  
  export default reducer