import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup
} from "firebase/auth";

import { auth } from "../firebaseconfig/firebase";
//--------------------
export const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);
  if(!context) throw new Error ('There is not auth provider');
  return context;
};
export function AuthProvider({ children }) {
  const signup = (email, password) =>    createUserWithEmailAndPassword(auth, email, password);
  const login = async (email, password) =>    signInWithEmailAndPassword(auth, email, password);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const logout = () => signOut(auth);
  const loginWhithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => unsubcribe()
    // console.log("auth provider loader");
  }, []);

  return (
    <authContext.Provider value={{ signup, login, user, logout, loading, loginWhithGoogle }}
    >
      {children}
    </authContext.Provider>
  );
}
