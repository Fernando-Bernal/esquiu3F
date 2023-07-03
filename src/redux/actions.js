import { collection, getDocs, orderBy, getFirestore, limit , query} from 'firebase/firestore';


export const GET_GOAL_LIBRES = "GET_GOAL_LIBRES";
export const GET_TORNEO_LIBRES = "GET_TORNEO_LIBRES";


export function getGoalLibres() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Goleadores", "libres", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: GET_GOAL_LIBRES, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los goleadores libres:", error);
    }
  };
}

export function getTorneoLibres() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Torneo", "libres", "equipo"), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_TORNEO_LIBRES, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo libres:", error);
    }
  }
}


