// استيراد فايربيس وقاعدة البيانات Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/13.3.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  onSnapshot
} from "https://www.gstatic.com/firebasejs/13.3.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCGz56U4iKqop8ddjFdSr7oU76YmBKdUDI",
  authDomain: "village-phone-directory-37b80.firebaseapp.com",
  projectId: "village-phone-directory-37b80",
  storageBucket: "village-phone-directory-37b80.firebasestorage.app",
  messagingSenderId: "694341841003",
  appId: "1:694341841003:web:8fbd59214c598d61a4c12e",
  measurementId: "G-M76CJPE6TJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, addDoc, deleteDoc, doc, onSnapshot };
