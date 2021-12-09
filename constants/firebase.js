import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyDCE5euCbbTxpgipdzwf_zWs3x3ahzDzaQ",
    authDomain: "lemon-app-e712e.firebaseapp.com",
    projectId: "lemon-app-e712e",
    storageBucket: "lemon-app-e712e.appspot.com",
    messagingSenderId: "787009548514",
    appId: "1:787009548514:web:7372c05c00878db7b56ebb"
};

const app = initializeApp(firebaseConfig);

export const firestore = getFirestore(app);

