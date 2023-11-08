// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3MF21RjXLOIoY9ffWrKFIxG8le6B9ljM",
  authDomain: "fir-7664d.firebaseapp.com",
  projectId: "fir-7664d",
  storageBucket: "fir-7664d.appspot.com",
  messagingSenderId: "700670678309",
  appId: "1:700670678309:web:0fa9faae959cb9fbdab6cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);