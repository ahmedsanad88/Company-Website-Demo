//jshint esversion:6

import firebase from "firebase";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "business-startup-template.firebaseapp.com",
  projectId: "business-startup-template",
  storageBucket: "business-startup-template.appspot.com",
  messagingSenderId: process.env.REACT_APP_MESSAGE_ID,
  appId: process.env.REACT_APP_APP_ID
};

// initialize firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// create our storage access
// const db = firebaseApp.firestore();


export default firebaseApp;