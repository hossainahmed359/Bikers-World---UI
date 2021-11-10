import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeFirebse from "../Pages/Login/Firebase/firebase.initialize";

//initialization
initializeFirebse();

// firebase functionalities
const useFirebase = () => {


    // States
    const [user, setUser] = useState({});
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);


    // AUTH
    const auth = getAuth();


    // Provider
    const googleProvider = new GoogleAuthProvider();


    // Google Sign In
    const handleGoogleSignIn = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setError(null);
                // const user = result.user;
                // ...
            }).catch((error) => {
                // Handle Errors here.
                setError(error.message);
            })
            .finally(() => setIsLoading(false));
    }


    // Email Registration and Update Name
    const handleEmailRegistration = (name, email, password) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError(null)
                // Checking registration success 
                if (result?.user?.email) {
                    // Updating Profile
                    updateProfile(auth.currentUser, {
                        displayName: name
                    }).then(() => {
                        // console.log(user)
                        // Setting User Name on Update Success || Not waiting for observer
                        const newUser = { displayName: name, email: email }
                        setUser(newUser)
                        //
                    }).catch((error) => {
                        setError(error.message)
                    })
                }
            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => setIsLoading(false))
    }


    // Email Sign In
    const handleEmailSignIn = (email, password) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError(null)
                // Sign in success
                // const user = result.user;

            })
            .catch((error) => {
                setError(error.message);
            })
            .finally(() => { setIsLoading(false) });
    }


    // Sign Out
    const handleSignOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({});
            setError(null);
        }).catch((error) => {
            // An error happened.
            setError(error.message)
        })
            .finally(() => { setIsLoading(false) });
    }


    // Observer || User Login || User Logout
    useEffect(() => {
        setIsLoading(true)
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                console.log(user)
                // ...
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false);
        });
    }, []);


    // Return

    return {
        user,
        error,
        setError,
        isLoading,
        handleGoogleSignIn,
        handleEmailRegistration,
        handleEmailSignIn,
        handleSignOut
    }
}

export default useFirebase;