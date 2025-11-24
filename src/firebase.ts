import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore, doc, getDoc  } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7l_usm7wxTZEJ7afoeA4D9ZKESL7Vrew",
  authDomain: "porfolio-design.firebaseapp.com",
  projectId: "porfolio-design",
  storageBucket: "porfolio-design.firebasestorage.app",
  messagingSenderId: "1070014142586",
  appId: "1:1070014142586:web:83ef9f009fe2a63ce583c3",
  measurementId: "G-0TE0JSJF2H"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);



