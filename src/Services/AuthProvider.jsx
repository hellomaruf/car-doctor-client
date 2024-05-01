import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
  };
  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
}

export default AuthProvider;
