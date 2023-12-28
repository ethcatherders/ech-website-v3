// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  writeBatch,
  setDoc,
  collection,
} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC0ZhGqhMm39oF6YlbRwnaNVm9N24VIWI0",
  authDomain: "ethcatherders.firebaseapp.com",
  projectId: "ethcatherders",
  storageBucket: "ethcatherders.appspot.com",
  messagingSenderId: "854742644030",
  appId: "1:854742644030:web:6efc5b059215d9f4b4e86f",
  measurementId: "G-R02VQHJLFL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  db,
  getDocs,
  getDoc,
  doc,
  updateDoc,
  writeBatch,
  setDoc,
  collection,
};
