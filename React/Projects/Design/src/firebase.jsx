// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCBtAwPtVceGTNR02oXjAGPp7rS--IcO1c",
  authDomain: "design-port-69.firebaseapp.com",
  projectId: "design-port-69",
  storageBucket: "design-port-69.firebasestorage.app",
  messagingSenderId: "151702765332",
  appId: "1:151702765332:web:cb4d3149d226e1ddd6cc01",
  measurementId: "G-4PHFQKZR66",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
