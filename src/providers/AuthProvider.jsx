/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.init"; // Adjust this import to your Firebase initialization
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, name, photoURL) => {
    try {
      // Register user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Update user's profile (name and photo URL)
      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      // Add user details to Firestore
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        name,
        email: user.email,
        photoURL: photoURL || "", // Optional, handle if no photo URL is provided
        userId: user.uid, // Store Firebase user ID
      });

      return user;
    } catch (error) {
      throw new Error(error.message); // Handle any errors
    }
  };

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const value = {
    user,
    signUp,
    signIn,
    logOut,
    loading,
  };

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
