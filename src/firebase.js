import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "test-ripo.firebaseapp.com",
  projectId: "test-ripo",
  storageBucket: "test-ripo.appspot.com",
  messagingSenderId: "273996191478",
  appId: "1:273996191478:web:4ec766c106e836c80e3ed7",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
