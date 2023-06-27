import { initializeApp } from "firebase/app";

const firebaseConfig = {
	apiKey: "AIzaSyBeVPO_KRUTeSzAsrky0lFfpgJfvq1UYQ0",
	authDomain: "esquiu3-66e8a.firebaseapp.com",
	projectId: "esquiu3-66e8a",
	storageBucket: "esquiu3-66e8a.appspot.com",
	messagingSenderId: "330337098288",
	appId: "1:330337098288:web:b9a1ce803e5833625b6bf5",
	measurementId: "G-VP99KRMVJC",
};

initializeApp(firebaseConfig);

export const db = initializeApp(firebaseConfig);

