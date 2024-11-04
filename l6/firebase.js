// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyACd5LJ_W2VPJy61NGen0pi7Qbs7mkBtuQ",
  //apiKey: process.env.API_KEY,
  authDomain: "wseiapp-d06c4.firebaseapp.com",
  projectId: "wseiapp-d06c4",
  storageBucket: "wseiapp-d06c4.firebasestorage.app",
  messagingSenderId: "1011307031338",
  appId: "1:1011307031338:web:823f67f01b7f03e3fdcc53",
  measurementId: "G-RT3BGTDXJ6"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);