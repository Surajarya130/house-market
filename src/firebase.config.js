import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyCkAHSiH72mKcI8b5rabcVXQmEx32v9Hzk",
  authDomain: "house-marketplace-app-3c72e.firebaseapp.com",
  projectId: "house-marketplace-app-3c72e",
  storageBucket: "house-marketplace-app-3c72e.appspot.com",
  messagingSenderId: "825839936011",
  appId: "1:825839936011:web:944eb20800f0ce1c3ddd0e"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore