// src/lib/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Import Firebase Auth
import { getFirestore } from "firebase/firestore"; // Import Firestore (if needed)

const firebaseConfig = {
  apiKey: "AIzaSyDf0A5xcVjzFBan7leJal99tkHDUYU4DuI",
  authDomain: "catc-90faf.firebaseapp.com",
  projectId: "catc-90faf",
  storageBucket: "catc-90faf.firebasestorage.app",
  messagingSenderId: "240789847927",
  appId: "1:240789847927:web:658b752e8329eb40c66b72",
  measurementId: "G-BGFVGENJX7",
};

// Initialize Firebase

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

export { auth }; // Export the auth module
