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
    const [isLoading, setIsLoading] = useState(true);


    // AUTH
    const auth = getAuth();


    // Provider
    const googleProvider = new GoogleAuthProvider();


    // Google Sign In
    const handleGoogleSignIn = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.push(destination);
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
    const handleEmailRegistration = (name, email, password, history) => {
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
                        // Setting User Name on Update Success || Not waiting for observer
                        const newUser = { displayName: name, email: email };
                        setUser(newUser);
                        history.push('/')
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
    const handleEmailSignIn = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError(null)
                const destination = location?.state?.from || '/';
                history.push(destination);
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
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                // ...
            } else {
                // User is signed out
                setUser({})
            }
            setIsLoading(false);
        });
        return unsubscribed;
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