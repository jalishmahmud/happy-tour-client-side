import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../pages/Login/firebase/firebase.init";

initializeAuthentication();

const auth = getAuth();
const GoogleProvider = new GoogleAuthProvider();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const signInWithGoolge = () => {
        return signInWithPopup(auth, GoogleProvider)

    };
    const logOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Log out')
                setUser({})
            })
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        })
        return unsubscribed;
    }, []);

    return {
        user,
        isLoading,
        setUser,
        setIsLoading,
        signInWithGoolge,
        logOut
    };
};

export default useFirebase;