// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.9/firebase-app.js";
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyC1FgoKhk1hAyPonc8VDmlMGjCZ7khcDDU",
  authDomain: "duck-gallery.firebaseapp.com",
  projectId: "duck-gallery",
  storageBucket: "duck-gallery.appspot.com",
  messagingSenderId: "910131397764",
  appId: "1:910131397764:web:6f570543e266f2bf9aeed1"
};


// Initialize Firebase
//const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectStorage, projectFirestore, timestamp};