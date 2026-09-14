import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7n5qP98Hm5edNt9D2RyP_TzYgXw6kdF4",
  authDomain: "barakah-agro-3aacb.firebaseapp.com",
  projectId: "barakah-agro-3aacb",
  storageBucket: "barakah-agro-3aacb.firebasestorage.app",
  messagingSenderId: "1058273007574",
  appId: "1:1058273007574:web:d39792d06fae4a7ebbf677",
  measurementId: "G-BQ0CY2JFWM"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);