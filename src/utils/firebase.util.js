import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyC4_ZJKlVBTr1tLZSrooV57gpWKUvivM6s",
  authDomain: "crwn-clothing-db-92f65.firebaseapp.com",
  projectId: "crwn-clothing-db-92f65",
  storageBucket: "crwn-clothing-db-92f65.appspot.com",
  messagingSenderId: "1034026996544",
  appId: "1:1034026996544:web:66c59f3d9b1e6b95dd60a5",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
