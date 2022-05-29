// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgTJWi9byl0VNTW68pEpqsXjvtoib-CoM",
  authDomain: "assainment11.firebaseapp.com",
  projectId: "assainment11",
  storageBucket: "assainment11.appspot.com",
  messagingSenderId: "897433864592",
  appId: "1:897433864592:web:f9ac898d00c8ba57bf4b15"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;