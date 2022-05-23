// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Zs9rvlPnH_e2FsHYsNpH9jEP-lKFWzs",
  authDomain: "silver-hammer-bf1a6.firebaseapp.com",
  projectId: "silver-hammer-bf1a6",
  storageBucket: "silver-hammer-bf1a6.appspot.com",
  messagingSenderId: "779017031224",
  appId: "1:779017031224:web:110276178944c31670e0cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;