import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAXAhu0zLJg5UVoOky5RGhdJrkDctpL9tI",
    authDomain: "bb-shop-db.firebaseapp.com",
    databaseURL: "https://bb-shop-db.firebaseio.com",
    projectId: "bb-shop-db",
    storageBucket: "bb-shop-db.appspot.com",
    messagingSenderId: "888325653149",
    appId: "1:888325653149:web:116078ca33a84c610f4a74",
    measurementId: "G-ZB17G99VYH"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  // google auth 
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;