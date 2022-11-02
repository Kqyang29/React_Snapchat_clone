// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import "firebase/compat/storage"
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjHy0u9SmML140uXQUCLv944Mpm498J5g",
  authDomain: "linkedin-clone-3dccb.firebaseapp.com",
  projectId: "linkedin-clone-3dccb",
  storageBucket: "linkedin-clone-3dccb.appspot.com",
  messagingSenderId: "424920140635",
  appId: "1:424920140635:web:c78cb52cd6309223c7287e"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = getStorage();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, db, provider,storage };
