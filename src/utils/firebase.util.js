import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4_ZJKlVBTr1tLZSrooV57gpWKUvivM6s",
  authDomain: "crwn-clothing-db-92f65.firebaseapp.com",
  projectId: "crwn-clothing-db-92f65",
  storageBucket: "crwn-clothing-db-92f65.appspot.com",
  messagingSenderId: "1034026996544",
  appId: "1:1034026996544:web:66c59f3d9b1e6b95dd60a5",
};

const firebaseApp = initializeApp(firebaseConfig);

const googlePprovider = new GoogleAuthProvider();
googlePprovider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googlePprovider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("Error creating a user: " + error.message);
    }
  }
  return userDocRef;
};
export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
