import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmzQH-BqtYlWwGhlt6YFtazjfKTFid29o",
  authDomain: "atividade-somativa-2-66d02.firebaseapp.com",
  projectId: "atividade-somativa-2-66d02",
  storageBucket: "atividade-somativa-2-66d02.firebasestorage.app",
  messagingSenderId: "511983024917",
  appId: "1:511983024917:web:226df956473870e2c4871c"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);