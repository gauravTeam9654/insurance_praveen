import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  apiKey: "AIzaSyAMbeOUXRpAqfxWJ-FMxrZ-HDz-p4unbV8",
  authDomain: "praveen-insurance.firebaseapp.com",
  projectId: "praveen-insurance",
  storageBucket: "praveen-insurance.firebasestorage.app",
  messagingSenderId: "1026106407664",
  appId: "1:1026106407664:web:4a4fe3d567b0f924f32035",
  measurementId: "G-3P08MV4C1V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
