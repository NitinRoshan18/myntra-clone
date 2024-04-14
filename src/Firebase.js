import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCvpH3iU1I_nFNAbLRIrSZ4Rfj0RqkSi5g",
    authDomain: "myntra-clone-310cd.firebaseapp.com",
    projectId: "myntra-clone-310cd",
    storageBucket: "myntra-clone-310cd.appspot.com",
    messagingSenderId: "912533569493",
    appId: "1:912533569493:web:9feacfd03172ed1449075c",
    measurementId: "G-LY81STNWQR"
  };
  const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);
console.log(auth);

export { db, auth, };