import { collection, getDocs, orderBy, getFirestore, limit , query} from 'firebase/firestore';


export const GET_GOAL_LIBRES = "GET_GOAL_LIBRES";
export const GET_TORNEO_LIBRESZona1 = "GET_TORNEO_LIBRESZona 1";
export const GET_TORNEO_LIBRESZona2 = "GET_TORNEO_LIBRESZona 2";
export const GET_TORNEO_LIBRESORO1 = "GET_TORNEO_LIBRESOro zona 1";
export const GET_TORNEO_LIBRESORO2 = "GET_TORNEO_LIBRESOro zona 2";
export const GET_TORNEO_LIBRESPLATA1 = "GET_TORNEO_LIBRESPlata zona 1";
export const GET_TORNEO_LIBRESPLATA2 = "GET_TORNEO_LIBRESPlata zona 2";
export const GET_FIXTURE_LIBRE = "GET_FIXTURE_LIBRE";

export const GET_GOAL_30 = "GET_GOAL_30";
export const GET_TORNEO_30Z1 = "GET_TORNEO_30Z1";
export const GET_TORNEO_30Z2 = "GET_TORNEO_30Z2";

export const GET_RESULTS = "GET_RESULTS";

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

export function getTorneoZona(zona) {
  const db = getFirestore();
  const queryCollection = `libres/${zona}/equipo`
  return async function (dispatch) {
    try {
      const q = query(collection(db, queryCollection), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: `GET_TORNEO_LIBRES${zona}`, payload: tabla });      
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

//* FUNCION RESULTADOS
export function getResults(fecha){
  const db = getFirestore();
  const querryCollection = `libres/${fecha}/resultados`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

//* FIXTURE LIBRES
export function getFixtureLibre(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "libres", "fixture", "fecha"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_FIXTURE_LIBRE, payload: tabla});
    }catch(error){
      console.error("Error al obtener el fixture", error);
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