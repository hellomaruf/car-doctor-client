// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyArP2LamOk8zNFrsJx6eNp4W98zlX9XHLQ",
  authDomain: "car-doctor-3767f.firebaseapp.com",
  projectId: "car-doctor-3767f",
  storageBucket: "car-doctor-3767f.appspot.com",
  messagingSenderId: "571712293921",
  appId: "1:571712293921:web:13c9d2f20ade25fdc7e760",
  measurementId: "G-5JVTM8R93Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);