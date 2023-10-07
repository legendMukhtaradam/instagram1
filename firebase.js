// Import the functions you need from the SDKs you need
// import { initializeApp,getApps,getApp } from "firebase/app";
// import { getFirestore } from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';

import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';



const firebaseConfig = {
  apiKey: "AIzaSyAGJg5brs4rcH5u_P7QynS6CpcFSHqZ7Go",
  authDomain: "instagram-ec803.firebaseapp.com",
  projectId: "instagram-ec803",
  storageBucket: "instagram-ec803.appspot.com",
  messagingSenderId: "1003361740762",
  appId: "1:1003361740762:web:a2b9d103f83055ec85c2e3"
};

// Initialize Firebase
// const app = !getApps().length ? initializeApp(firebaseConfig):getApp();
// const db = getFirestore();
// const storage = getStorage(app);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app)


export {app,db ,storage}
