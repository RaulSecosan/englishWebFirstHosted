// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCb6xar-rPVYR90rzdcQn0Wd7FxnZsKyXA",
  authDomain: "englishweb-65337.firebaseapp.com",
  projectId: "englishweb-65337",
  storageBucket: "englishweb-65337.appspot.com",
  messagingSenderId: "992227427957",
  appId: "1:992227427957:web:75ccf965a2e62e2eb55a3c",
  measurementId: "G-J2PP5593N0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore();