import{ getFirestore, collection, doc, getDoc , getDocs } from 'firebase/firestore';

const db = getFirestore();
export const GET_COLLECTION = "GET_COLLECTION";

//revisar si se hace dinamica o debo hacer una funcion por cada coleccion
export function getCollection(nameCollection) {
    return async function (dispatch) {
        const data = await getDocs(collection(db, nameCollection));
        dispatch({ type: "GET_COLLECTION", payload: data.docs });
    };
}





