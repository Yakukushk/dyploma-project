// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "@firebase/auth";
import {getFirestore} from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAT0VSbUVR9UC1DmyI3mx5lHo1NGe5nu_c",
    authDomain: "dyploma-project-801cb.firebaseapp.com",
    projectId: "dyploma-project-801cb",
    storageBucket: "dyploma-project-801cb.appspot.com",
    messagingSenderId: "213261573178",
    appId: "1:213261573178:web:50193265b0eb3ec0e9e903",
    measurementId: "G-9FFPWJN0CW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
export {auth, db}