// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkMH1dT0w3IY6tFEFaXBPhc824ZYfWlto",
  authDomain: "sacrotrinity.firebaseapp.com",
  projectId: "sacrotrinity",
  storageBucket: "sacrotrinity.firebasestorage.app",
  messagingSenderId: "232097751013",
  appId: "1:232097751013:web:7f1c562dbcaf26630c990c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar auth y provider de Google
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

// Firestore
const db = getFirestore(app);

export { auth, db, googleProvider, signOut };

