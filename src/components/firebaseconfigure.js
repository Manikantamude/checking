import {getAuth} from 'firebase/auth'
import { initializeApp } from "firebase/app";

const firebaseConfigure = {
    apiKey: "AIzaSyCas5as-akR4rLtGHSr3PDPGQDmmt4-QZ0",
    authDomain: "fir-email-8cb1b.firebaseapp.com",
    projectId: "fir-email-8cb1b",
    storageBucket: "fir-email-8cb1b.appspot.com",
    messagingSenderId: "68346223735",
    appId: "1:68346223735:web:0da484462f76af3f497a72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfigure);

export const auth=getAuth(app)