// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCnBj2hxLfg_7wsrYsREdh_FfO_s2RE6Yg",
  authDomain: "personal-finance-tracker-afe19.firebaseapp.com",
  projectId: "personal-finance-tracker-afe19",
  storageBucket: "personal-finance-tracker-afe19.appspot.com",
  messagingSenderId: "709016258861",
  appId: "1:709016258861:web:759809c2ddb60b45ad2ba4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export {app, db, auth }