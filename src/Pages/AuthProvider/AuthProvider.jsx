import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../../FireBase/firebase.confiq';
export const AuthContext = createContext(null)
const auth =getAuth(app)
const googleProvider= new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const[user,setUser]=useState({})
    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,currentUser=>{
           setUser(currentUser)
        })
        return ()=> unsubscribe()
    },[])
    const googleSignin=()=>{
        return signInWithPopup(auth,googleProvider)
    }
    const signUpWithEmail=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout=()=>{
        return signOut(auth)
    }
   
    const authInfo={
        user,
        googleSignin,
        signUpWithEmail,
        logout
    }
    return (
        <AuthContext.Provider value={authInfo}>
          {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;