// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCqXuHuA8NrjyYT2ssB_EoQk3kVzzwwDxU",
  authDomain: "restaurante-app-da0b7.firebaseapp.com",
  projectId: "restaurante-app-da0b7",
  storageBucket: "restaurante-app-da0b7.appspot.com",
  messagingSenderId: "53007909213",
  appId: "1:53007909213:web:cbb9f1d3b083798ceca8b4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);