// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyCZ7vfw85q0Ltp-JczKHO5BCvdarUJkMzo",
  authDomain: "sesail-94690.firebaseapp.com",
  projectId: "sesail-94690",
  storageBucket: "sesail-94690.appspot.com",
  messagingSenderId: "379304763130",
  appId: "1:379304763130:web:39e167d8015ffc6d3b7343",
  measurementId: "G-VJ8LQJBSG4",
};

// Initialize Firebase
const Firebase = initializeApp(firebaseConfig);
const authFirebase = getAuth(Firebase);
const db = getFirestore(Firebase);
const storage = getStorage(Firebase);
export { Firebase, authFirebase, db, storage };
