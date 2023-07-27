// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA653QvL2REj-c9X6Hyr2JdMQDz8Xa14FE",
  authDomain: "miniblog-3423f.firebaseapp.com",
  projectId: "miniblog-3423f",
  storageBucket: "miniblog-3423f.appspot.com",
  messagingSenderId: "574063455106",
  appId: "1:574063455106:web:daeefe75385007a124bd9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
