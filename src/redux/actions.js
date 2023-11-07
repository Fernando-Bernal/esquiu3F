import { collection, getDocs, orderBy, getFirestore, limit , query, where} from 'firebase/firestore';


export const GET_GOAL_LIBRES = "GET_GOAL_LIBRES";
export const GET_TORNEO_LIBRESZona1 = "GET_TORNEO_LIBRESZona 1";
export const GET_TORNEO_LIBRESZona2 = "GET_TORNEO_LIBRESZona 2";
export const GET_TORNEO_LIBRESORO1 = "GET_TORNEO_LIBRESOro zona 1";
export const GET_TORNEO_LIBRESORO2 = "GET_TORNEO_LIBRESOro zona 2";
export const GET_TORNEO_LIBRESPLATA1 = "GET_TORNEO_LIBRESPlata zona 1";
export const GET_TORNEO_LIBRESPLATA2 = "GET_TORNEO_LIBRESPlata zona 2";
export const GET_TORNEO_LIBRESDESAFIO1 = "GET_TORNEO_LIBRESDesafio zona 1";
export const GET_TORNEO_LIBRESDESAFIO2 = "GET_TORNEO_LIBRESDesafio zona 2";
export const GET_FIXTURE_LIBRE = "GET_FIXTURE_LIBRE";
export const GET_RESULTS = "GET_RESULTS";
export const GET_RESULTS2 = "GET_RESULTS2";
export const GET_RESULTSCOPAORO1 = "GET_RESULTSCOPAOro zona 1";
export const GET_RESULTSCOPAORO2 = "GET_RESULTSCOPAOro zona 2";
export const GET_RESULTSCOPAPLATA1 = "GET_RESULTSCOPAPlata zona 1";
export const GET_RESULTSCOPAPLATA2 = "GET_RESULTSCOPAPlata zona 2";

export const GET_GOAL_30 = "GET_GOAL_30";
export const GET_TORNEO_30Zona1 = "GET_TORNEO_30Zona 1";
export const GET_TORNEO_30Zona2 = "GET_TORNEO_30Zona 2";
export const GET_TORNEO_30ORO1 = "GET_TORNEO_30Oro zona 1";
export const GET_TORNEO_30ORO2 = "GET_TORNEO_30Oro zona 2";
export const GET_TORNEO_30PLATA1 = "GET_TORNEO_30Plata zona 1";
export const GET_TORNEO_30PLATA2 = "GET_TORNEO_30Plata zona 2";
export const GET_FIXTURE_30 = "GET_FIXTURE_30";
export const GET_RESULTS_30 = "GET_RESULTS_30"
export const GET_RESULTS_302 = "GET_RESULTS_302";
export const GET_RESULTS_30COPAORO1 = "GET_RESULTS_30COPAOro zona 1";
export const GET_RESULTS_30COPAORO2 = "GET_RESULTS_30COPAOro zona 2";
export const GET_RESULTS_30COPAPLATA1 = "GET_RESULTS_30COPAPlata zona 1";
export const GET_RESULTS_30COPAPLATA2 = "GET_RESULTS_30COPAPlata zona 2";

export const GET_GOAL_36 = "GET_GOAL_36";
export const GET_TORNEO_36Zona1 = "GET_TORNEO_36Zona 1";
export const GET_TORNEO_36Zona2 = "GET_TORNEO_36Zona 2";
export const GET_TORNEO_36ORO1 = "GET_TORNEO_36Oro zona 1";
export const GET_TORNEO_36ORO2 = "GET_TORNEO_36Oro zona 2";
export const GET_TORNEO_36PLATA1 = "GET_TORNEO_36Plata zona 1";
export const GET_TORNEO_36PLATA2 = "GET_TORNEO_36Plata zona 2";
export const GET_FIXTURE_36 = "GET_FIXTURE_36";
export const GET_RESULTS_36 = "GET_RESULTS_36";
export const GET_RESULTS_36COPAORO1 = "GET_RESULTS_36COPAOro zona 1";
export const GET_RESULTS_36COPAORO2 = "GET_RESULTS_36COPAOro zona 2";

export const GET_GOAL_40 = "GET_GOAL_40";
export const GET_TORNEO_40Zona1 = "GET_TORNEO_40Zona 1";
export const GET_TORNEO_40Zona2 = "GET_TORNEO_40Zona 2";
export const GET_TORNEO_40ORO1 = "GET_TORNEO_40Oro zona 1";
export const GET_TORNEO_40ORO2 = "GET_TORNEO_40Oro zona 2";
export const GET_TORNEO_40PLATA1 = "GET_TORNEO_40Plata zona 1";
export const GET_TORNEO_40PLATA2 = "GET_TORNEO_40Plata zona 2";
export const GET_FIXTURE_40 = "GET_FIXTURE_40";
export const GET_RESULTS_40 = "GET_RESULTS_40" 
export const GET_RESULTS_40COPAORO1 = "GET_RESULTS_40COPAOro zona 1";
export const GET_RESULTS_40COPAORO2 = "GET_RESULTS_40COPAOro zona 2";
export const GET_RESULTS_40COPAPLATA1 = "GET_RESULTS_40COPAPlata zona 1";
export const GET_RESULTS_40COPAPLATA2 = "GET_RESULTS_40COPAPlata zona 2";

export const GET_GOAL_MAXI = "GET_GOAL_MAXI";
export const GET_TORNEO_MAXIZona1 = "GET_TORNEO_MAXIZona 1";
export const GET_TORNEO_MAXIZona2 = "GET_TORNEO_MAXIZona 2";
export const GET_TORNEO_MAXIORO1 = "GET_TORNEO_MAXIOro zona 1";
export const GET_TORNEO_MAXIORO2 = "GET_TORNEO_MAXIOro zona 2";
export const GET_TORNEO_MAXIPLATA1 = "GET_TORNEO_MAXIPlata zona 1";
export const GET_TORNEO_MAXIPLATA2 = "GET_TORNEO_MAXIPlata zona 2";
export const GET_TORNEO_MAXIDESAFIO1 = "GET_TORNEO_MAXIDesafio zona 1";
export const GET_TORNEO_MAXIDESAFIO2 = "GET_TORNEO_MAXIDesafio zona 2";
export const GET_FIXTURE_MAXI = "GET_FIXTURE_MAXI";
export const GET_RESULTS_MAXI = "GET_RESULTS_MAXI" 
export const GET_RESULTS_MAXICOPAORO1 = "GET_RESULTS_MAXICOPAOro zona 1";
export const GET_RESULTS_MAXICOPAORO2 = "GET_RESULTS_MAXICOPAOro zona 2";


export const GET_NOTICIAS = "GET_NOTICIAS"
export const GET_NOTICIA_DETAIL = "GET_NOTICIA_DETAIL"
export const CLEAR_NOTICIA_DETAIL = "CLEAR_NOTICIA_DETAIL"
export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

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
//* FUNCION RESULTADOS
export function getResults(fecha){
  const db = getFirestore();
  const querryCollection = `libres/${fecha}/Zona1`
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
export function getResults2(fecha){
  const db = getFirestore();
  const querryCollection = `libres/${fecha}/Zona2`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS2, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}
//* results copas 
export function getResultsCopa(fecha, zona){
  const db = getFirestore();
  const querryCollection = `libres/${fecha}/${zona}`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_RESULTSCOPA${zona}`, payload: tabla});
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

export function getTorneo30(zona) {
  const db = getFirestore();
  const queryCollection = `+30/${zona}/equipo`
  return async function (dispatch) {
    try {
      const q = query(collection(db, queryCollection), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: `GET_TORNEO_30${zona}`, payload: tabla });      
    } catch (error) {
      console.error("Error al obtener los equipos del torneo +30 ", error);
    }
  }
}

export function getResults30(fecha){
  const db = getFirestore();
  const querryCollection = `+30/${fecha}/Zona1`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS_30, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}
export function getResults302(fecha){
  const db = getFirestore();
  const querryCollection = `+30/${fecha}/Zona2`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS_302, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

export function getFixture30(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "+30", "fixture", "fecha"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_FIXTURE_30, payload: tabla});
    }catch(error){
      console.error("Error al obtener el fixture", error);
    }
  }
}

export function getResultsCopa30(fecha, zona){
  const db = getFirestore();
  const querryCollection = `+30/${fecha}/${zona}`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_RESULTS_30COPA${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

//* TORNEO +36

export function getGoal36() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Goleadores", "+36", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: GET_GOAL_36, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los goleadores +36", error);
    }
  };
}

export function getTorneo36(zona) {
  const db = getFirestore();
  const queryCollection = `+36/${zona}/equipo`
  return async function (dispatch) {
    try {
      const q = query(collection(db, queryCollection), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
        const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: `GET_TORNEO_36${zona}`, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los equipos del torneo +36", error);
    }
  }
}

export function getResults36(fecha){
  const db = getFirestore();
  const querryCollection = `+36/${fecha}/Zona1`
  return async function (dispatch){ 
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS_36, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

export function getFixture36(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "+36", "fixture", "fecha"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_FIXTURE_36, payload: tabla});
    }catch(error){
      console.error("Error al obtener el fixture", error);
    }
  }
}

export function getResultsCopa36(fecha, zona){
  const db = getFirestore();
  const querryCollection = `+36/${fecha}/${zona}`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_RESULTS_36COPA${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

// * TORNEO +40

export function getGoal40() {
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "Goleadores", "+40", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({ type: GET_GOAL_40, payload: tabla });
    } catch (error) {
      console.error("Error al obtener los goleadores +40", error);
    }
  };
}

export function getTorneo40(zona){
  const db = getFirestore();
  const queryCollection = `+40/${zona}/equipo`
  return async function (dispatch){
    try{
      const q = query(collection(db, queryCollection), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_TORNEO_40${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los equipos del torneo +40", error);
    }
  }
}

export function getResults40(fecha){
  const db = getFirestore();
  const querryCollection = `+40/${fecha}/Zona1`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS_40, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

export function getFixture40(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "+40", "fixture", "fecha"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_FIXTURE_40, payload: tabla});
    }catch(error){
      console.error("Error al obtener el fixture", error);
    }
  }
}

export function getResultsCopa40(fecha, zona){
  const db = getFirestore();
  const querryCollection = `+40/${fecha}/${zona}`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_RESULTS_40COPA${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

//* TORNEO MAXI

export function getGoalMaxi(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "Goleadores", "Maxi", "jugador"), orderBy("orden"), limit(20));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => doc.data());
      dispatch({type: GET_GOAL_MAXI, payload: tabla});
    }catch(error){
      console.error("Error al obtener los goleadores Maxi", error);
    }
  }
}

export function getTorneoMaxi(zona){
  const db = getFirestore();
  const queryCollection = `Maxi/${zona}/equipo`
  return async function (dispatch){
    try{
      const q = query(collection(db, queryCollection), orderBy("posici_n"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_TORNEO_MAXI${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los equipos del torneo Maxi", error);
    }
  }
}

export function getResultsMaxi(fecha){
  const db = getFirestore();
  const querryCollection = `Maxi/${fecha}/Zona1`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_RESULTS_MAXI, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

export function getFixtureMaxi(){
  const db = getFirestore();
  return async function (dispatch){
    try{
      const q = query(collection(db, "Maxi", "fixture", "fecha"));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: GET_FIXTURE_MAXI, payload: tabla});
    }catch(error){
      console.error("Error al obtener el fixture", error);
    }
  }
}

export function getResultsCopaMaxi(fecha, zona){
  const db = getFirestore();
  const querryCollection = `Maxi/${fecha}/${zona}`
  return async function (dispatch){
    try{
      const q = query(collection(db, querryCollection));
      const querySnapshot = await getDocs(q);
      const tabla = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({type: `GET_RESULTS_MAXICOPA${zona}`, payload: tabla});
    }catch(error){
      console.error("Error al obtener los resultados", error);
    }
  }
}

//* NOTICIAS
export const getNoticias = () =>{
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "blog"), orderBy("fecha", "desc"));
      const querySnapshot = await getDocs(q);
        const notas = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
        dispatch({ type: GET_NOTICIAS, payload: notas });      
    } catch (error) {
      console.error("Error al obtener las noticias", error);
    }
  }
}

//* USUARIO

export function login(email){
  return async function (dispatch) {
    try {
      dispatch({ type: LOGIN, payload: email });
    } catch (error) {
      console.error("Error al loguearse", error);
    }
  };
}

export const logout = () => {
  return async function (dispatch) {
    try {
      dispatch({ type: LOGOUT });
    } catch (error) {
      console.error("Error al desloguearse", error);
    }
  };
}

export const getNoticiaDetail = (title) =>{
  const db = getFirestore();
  return async function (dispatch) {
    try {
      const q = query(collection(db, "blog") , where("title", "==", title ));
      const querySnapshot = await getDocs(q);
      const nota = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id}));
      dispatch({ type: GET_NOTICIA_DETAIL, payload: nota });
    } catch (error) {
      console.error("Error al obtener la noticia", error);
    }
  }
}

export const clearNoticiaDetil = () =>{
  return async function (dispatch) {
    try {
      dispatch({ type: CLEAR_NOTICIA_DETAIL });
    } catch (error) {
      console.error("Error al limpiar la noticia", error);
    }
  }
}
