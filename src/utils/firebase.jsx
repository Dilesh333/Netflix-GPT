import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClELqcVWlqCBrRzLnKPvwYAh7hSEzULvw",
  authDomain: "netflixgpt-15dfc.firebaseapp.com",
  projectId: "netflixgpt-15dfc",
  storageBucket: "netflixgpt-15dfc.firebasestorage.app",
  messagingSenderId: "649289331101",
  appId: "1:649289331101:web:1886845ba0d27d8dfe3f74",
  measurementId: "G-7B8QSHGMMB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//signin auth 
export const auth = getAuth();