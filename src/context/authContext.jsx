import { createContext, useContext, useState } from "react";
import {  signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../firebase";

export const userContext = createContext();

export const userAuth = () => {
    return useContext(userContext);
}

function AuthContextProvider ({children}) {
    const [user, setUser] = useState(null);
    
    const signIn = (email, password) => {
        setUser({email, password});
        return signInWithEmailAndPassword(auth, email, password);
      };
    
      const logout = () => {
        setUser(null)
        return signOut(auth);
      };
   
    return (
        <userContext.Provider value={{signIn, logout, user}}>
            {children}
        </userContext.Provider>
    )
}

export default AuthContextProvider;