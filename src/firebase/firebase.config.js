
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCcVm0v5no4rIon6n6tyP7kl9drenyhOWs",
    authDomain: "auth-recap-77301.firebaseapp.com",
    projectId: "auth-recap-77301",
    storageBucket: "auth-recap-77301.firebasestorage.app",
    messagingSenderId: "139804700634",
    appId: "1:139804700634:web:4ef5f858f205558e345ae3"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)