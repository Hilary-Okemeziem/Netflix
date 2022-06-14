import { createContext, useContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,onAuthStateChanged } from 'firebase/auth'
import {auth, db} from '../Firebase'
import {setDoc, doc} from "firebase/firestore"

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const signUp = (email, password) => {
         createUserWithEmailAndPassword(auth, email, password)
         setDoc(doc(db, 'users', email), {
            savedMovies: []
         })  
    };

    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // console.log(currentUser);
            setUser(currentUser)
        })
        return () => {
            unsubscribe()
        }
    }, [])



    return (
        <AuthContext.Provider value={{signUp, user, logOut, logIn}}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}