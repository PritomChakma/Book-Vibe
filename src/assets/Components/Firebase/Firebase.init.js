// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNkqxn9W4RyxOhY_quNojjoe-MJ_ghSlk",
  authDomain: "book-vibe-d2cb1.firebaseapp.com",
  projectId: "book-vibe-d2cb1",
  storageBucket: "book-vibe-d2cb1.firebasestorage.app",
  messagingSenderId: "1050575556789",
  appId: "1:1050575556789:web:357e6d2419529a40c56efc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth