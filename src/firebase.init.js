// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADahAoMxyu_GR-lRZr7maJpkX6kFJ-tgY",
  authDomain: "doctor-portal-authentica-32311.firebaseapp.com",
  projectId: "doctor-portal-authentica-32311",
  storageBucket: "doctor-portal-authentica-32311.appspot.com",
  messagingSenderId: "568742061677",
  appId: "1:568742061677:web:e0178f083958b7026d8164"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;

const auth = getAuth(app)
export default auth;