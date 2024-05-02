import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "./firebase.config";

export const AuthContext = createContext();
function AuthProvider({ children }) {
  const [user, setUser] = useState();
  // Create a user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign in a user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  // observe user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        console.log(currentUser);
      }
      return () => {
        unsubscribe();
      };
    });
  }, []);

  const authInfo = {
    createUser,
    loginUser,
    user,
    logOut
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
