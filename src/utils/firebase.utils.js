/* eslint-disable no-unused-vars */
import { initializeApp } from 'firebase/app';
import {    getAuth, 
            signInWithRedirect, 
            signInWithPopup, 
            GoogleAuthProvider,
            createUserWithEmailAndPassword
        } 
        from 'firebase/auth';
import { getFirestore,
         doc,
         getDoc,
         setDoc
        } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDUgLQgjKcW8bm7oR3wCkNhhsjm3vtESvs",
    authDomain: "ez-clothing-db.firebaseapp.com",
    projectId: "ez-clothing-db",
    storageBucket: "ez-clothing-db.appspot.com",
    messagingSenderId: "1010941737291",
    appId: "1:1010941737291:web:e193ede268c8864930d0ce"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

  
  export const auth = getAuth();

  export const signInWithGooglePopup = () => 
  signInWithPopup(auth, googleProvider);

  export const signInWithGoogleRedirect = () => 
  signInWithRedirect(auth, googleProvider);

  export const db = getFirestore();

  export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
   

    //Doc takes three objects, database, collection and third is some identifier
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef)

    const userSnapshot = await getDoc(userDocRef);

    if(!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            });
        } catch (error) {
            console.log('Error creating the User', error.message);
        }
    }

     return userDocRef;
  };

  export const createAuthUserWithEmailAndPassword = async (email, password) => {
    // if (!email || !password) return;

    return await createUserWithEmailAndPassword(auth, email, password);
  }