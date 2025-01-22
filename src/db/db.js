import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCGPj6p1VsWHxeg73M5POaSzJBw5R8sh5c",
  authDomain: "tienda-senuelos-ft.firebaseapp.com",
  projectId: "tienda-senuelos-ft",
  storageBucket: "tienda-senuelos-ft.firebasestorage.app",
  messagingSenderId: "710882981509",
  appId: "1:710882981509:web:7961cee5ab283fcb4b9bec"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore()

export default db;