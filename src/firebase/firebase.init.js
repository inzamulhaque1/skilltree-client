// firebase.init.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; 

const firebaseConfig = {
  apiKey: "AIzaSyAyY-ml7xpzDTXqM94USp7qg9ws-XJXBWk",
  authDomain: "skilltree-e5057.firebaseapp.com",
  projectId: "skilltree-e5057",
  storageBucket: "skilltree-e5057.firebasestorage.app",
  messagingSenderId: "427020187351",
  appId: "1:427020187351:web:53c419ec4934e2325da292"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore and Auth
export const db = getFirestore(app); // Firestore
export const auth = getAuth(app); // Auth
