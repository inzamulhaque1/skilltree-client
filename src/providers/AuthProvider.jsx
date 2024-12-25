/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useEffect } from "react";
import { auth, db } from "../firebase/firebase.init"; // Adjust this import to your Firebase initialization
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { collection, addDoc } from "firebase/firestore"; // Import Firestore functions
import axios from "axios";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log('state capture:' , currentUser?.email )
      if (currentUser?.email) {
        const user = { email: currentUser.email };
        axios
          .post("http://localhost:5000/jwt", user, {withCredentials: true})
          .then((res) =>{ 
            console.log('login token', res.data)
            setLoading(false);
          });
      }
      else {
        axios.post("http://localhost:5000/logout", {}, {withCredentials: true})
        .then((res) => {
          console.log('logout', res.data)
          setLoading(false);
        });
      }

      
    });

    return () => unsubscribe();
  }, []);

  const signUp = async (email, password, name, photoURL) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name,
        photoURL: photoURL,
      });

      const userRef = collection(db, "users");
      await addDoc(userRef, {
        name,
        email: user.email,
        photoURL: photoURL || "",
        userId: user.uid,
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const signIn = async (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // Add user details to Firestore if they don't already exist
      const userRef = collection(db, "users");
      await addDoc(userRef, {
        name: user.displayName,
        email: user.email,
        photoURL: user.photoURL || "",
        userId: user.uid,
      });

      return user;
    } catch (error) {
      throw new Error(error.message);
    }
  };

  const value = {
    user,
    signUp,
    signIn,
    logOut,
    googleSignIn,
    loading,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
export default AuthProvider;
