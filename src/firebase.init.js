// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpAHnHb92xqX7RUUIrBJ17rJEryDEz2bI",
    authDomain: "fir-authentication-bf415.firebaseapp.com",
    projectId: "fir-authentication-bf415",
    storageBucket: "fir-authentication-bf415.appspot.com",
    messagingSenderId: "496721065559",
    appId: "1:496721065559:web:bab508be7b037508ef1512"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;