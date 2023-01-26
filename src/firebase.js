import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC6E20m9L2mOXmudPZb17Qds943G5diSiI",
  authDomain: "front-clone.firebaseapp.com",
  projectId: "front-clone",
  storageBucket: "front-clone.appspot.com",
  messagingSenderId: "1096511885621",
  appId: "1:1096511885621:web:0dbc5c1961cbb2edd93c7c",
  measurementId: "G-NRPLHS69L6",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
 
