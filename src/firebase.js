import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBeQaxttw51VV9Cg0Bmz9lggux6TrKPlAs",
  authDomain: "clone-27d1c.firebaseapp.com",
  databaseURL: "https://clone-27d1c.firebaseio.com",
  projectId: "clone-27d1c",
  storageBucket: "clone-27d1c.appspot.com",
  messagingSenderId: "127596862665",
  appId: "1:127596862665:web:31e5a8b0aab3e078060118",
  measurementId: "G-BRQ9X1LDJR",
});

const auth = firebase.auth();
const db = firebaseApp.firestore();

export { auth, db };
