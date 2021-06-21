import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCYqW3a5EKW4A2C2BCIkldfT2J-B_VkaSg",
  authDomain: "rookas-instagram-mern-app.firebaseapp.com",
  projectId: "rookas-instagram-mern-app",
  storageBucket: "rookas-instagram-mern-app.appspot.com",
  messagingSenderId: "610652788244",
  appId: "1:610652788244:web:71772464d40b1640c6b901",
  measurementId: "G-V5G1W11TD5"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
