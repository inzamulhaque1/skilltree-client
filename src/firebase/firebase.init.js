// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
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
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);