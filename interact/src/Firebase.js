
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider } from "firebase/auth";

import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyDnKxJnrJNSdBXxL0rk9ZPkA_lC8-vy3UI",
    authDomain: "interact-school.firebaseapp.com",
    projectId: "interact-school",
    storageBucket: "interact-school.appspot.com",
    messagingSenderId: "834795797838",
    appId: "1:834795797838:web:e9dbb04073b74d3b7ff21f",
    measurementId: "G-Q0FSKTM9K9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth()
const provider = GoogleAuthProvider();
export {auth, provider}
export default db;