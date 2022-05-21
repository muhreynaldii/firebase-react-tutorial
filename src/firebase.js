// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "tutorial-50310.firebaseapp.com",
  projectId: "tutorial-50310",
  storageBucket: "tutorial-50310.appspot.com",
  messagingSenderId: "726154916485",
  appId: "1:726154916485:web:13d3b967f59b216372efec",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();
