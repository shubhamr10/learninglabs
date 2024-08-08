// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPKuhUh49ILNOp9SW7Ic7-Tm87CEBD6pE",
  authDomain: "crwn-clothing-ee5c0.firebaseapp.com",
  projectId: "crwn-clothing-ee5c0",
  storageBucket: "crwn-clothing-ee5c0.appspot.com",
  messagingSenderId: "1067782898179",
  appId: "1:1067782898179:web:c2957855d07060bcad8436"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider =  new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  console.log(userDocRef)

  const userSnapShot = await getDoc(userDocRef);
  console.log(userSnapShot);

  if(!userSnapShot.exists()){
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try{
      await setDoc(userDocRef, {
        displayName, email,
        createdAt
      });
    } catch (err){
      console.log(err);
    }

  }
  return userDocRef;
  // if user data exits


  // return userDocRef

}