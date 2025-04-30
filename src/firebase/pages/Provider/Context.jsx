import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { AuthContext } from "./AuthContext";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
    const [loader, setLoader] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const logIn = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLoIn = new GoogleAuthProvider()
    const googleProvider = () => {
        setLoader(true)
        return signInWithPopup(auth, googleLoIn)
    }

    const logOut = () => {
        return signOut(auth);
    }

    const emailVerification = () => {
        return sendEmailVerification(auth.currentUser)
    }

    const passReset = (email) => {
        return sendPasswordResetEmail(auth,email)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            console.log('current user', currentUser);
            setUser(currentUser)
            setLoader(false)
        })
        return () => unsubscribe()


    }, [])

    const userInfo = {
        createUser,
        logIn,
        googleProvider,
        user,
        loader,
        logOut,
        emailVerification,
        passReset
    };
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    )

}
export default AuthProvider;