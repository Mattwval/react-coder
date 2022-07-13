import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBCWIfJ3myKfTpKHAOgX-E-2HJTezV0En4",
    authDomain: "react-coder-ac9f9.firebaseapp.com",
    projectId: "react-coder-ac9f9",
    storageBucket: "react-coder-ac9f9.appspot.com",
    messagingSenderId: "140447066280",
    appId: "1:140447066280:web:8fa9a7fa68229bc4913a9d"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)