// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from 'firebase/auth'
import { Firestore, getFirestore } from 'firebase/firestore/lite'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDubFLj8FFqydpksOsHOTL0T5u1Fp3UCEg",
  authDomain: "react-cursos-a6cb3.firebaseapp.com",
  projectId: "react-cursos-a6cb3",
  storageBucket: "react-cursos-a6cb3.firebasestorage.app",
  messagingSenderId: "275990977265",
  appId: "1:275990977265:web:0df951c2b462cb891d6750"
};

// Initialize Firebase
export const firebaseaApp = initializeApp(firebaseConfig);

export const firebaseAuth  = getAuth(firebaseaApp)

export const FirebaseDB = getFirestore(firebaseaApp)

