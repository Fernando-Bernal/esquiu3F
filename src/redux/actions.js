import { collection, getDocs, orderBy, getFirestore, limit , query} from 'firebase/firestore';


export const GET_GOAL_LIBRES = "GET_GOAL_LIBRES";
export const GET_TORNEO_LIBRESZ1 = "GET_TORNEO_LIBRESZ1";
export const GET_TORNEO_LIBRESZ2 = "GET_TORNEO_LIBRESZ2";

export const GET_GOAL_30 = "GET_GOAL_30";
export const GET_TORNEO_30Z1 = "GET_TORNEO_30Z1";
export const GET_TORNEO_30Z2 = "GET_TORNEO_30Z2";

export const GET_NOTICIAS = "GET_NOTICIAS"

//* TORNEO LIBRES
export function getGoalLibres() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Goleadores", "libres", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: GET_GOAL_LIBRES, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los goleadores libres", error);
    }
  };
}

export function getTorneoLibresZ1() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "libres", "Zona 1", "equipo"), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_TORNEO_LIBRESZ1, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo libres", error);
    }
  }
}
export function getTorneoLibresZ2() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "libres", "Zona 2", "equipo"), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_TORNEO_LIBRESZ2, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo libres", error);
    }
  }
}

//* TORNEO +30
export function getGoal30() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Goleadores", "+30", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: GET_GOAL_30, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los goleadores +30", error);
    }
  };
}

export function getTorneo30Z1() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "+30", "Zona 1" , "equipo"), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_TORNEO_30Z1, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo +30 Zona 1", error);
    }
  }
}
export function getTorneo30Z2() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "+30", "Zona 2" , "equipo"), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_TORNEO_30Z2, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo +30 Zona 2", error);
    }
  }
}


//* NOTICIAS
export const getNoticias = () =>{
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Noticias"), orderBy("fecha", "desc"));
      const querySnapshot = await getDocs(q);
        const notas = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_NOTICIAS, payload: notas });      
    } catch (error) {
      console.error("Error al obtener las noticias", error);
    }
  }
}