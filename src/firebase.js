import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
	apiKey: import.meta.env.VITE_APP_FIREBASE_APIKEY,
	authDomain: import.meta.env.VITE_APP_FIREBASE_AUTHDOMAIN,
	projectId: import.meta.env.VITE_APP_FIREBASE_PROJECTID,
	storageBucket: import.meta.env.VITE_APP_FIREBASE_STORAGEBUCKET,
	messagingSenderId: import.meta.env.VITE_APP_FIREBASE_MESSAGINGSENDERID,
	appId: import.meta.env.VITE_APP_FIREBASE_APPID,
	measurementId: import.meta.env.VITE_APP_FIREBASE_MEASUREMENTID,
};


export const db = initializeApp(firebaseConfig);
export const auth = getAuth(db);