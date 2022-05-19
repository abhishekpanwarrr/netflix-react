import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// import {seedDatabase} from '../seed'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKfvBIFVryGpyEFZ1IhHU3jD7mzk-WIxM",
  authDomain: "netflix-1ec20.firebaseapp.com",
  projectId: "netflix-1ec20",
  storageBucket: "netflix-1ec20.appspot.com",
  messagingSenderId: "433919691632",
  appId: "1:433919691632:web:a86752bc40afee03d59db5"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const database = getFirestore(app);
// seedDatabase()