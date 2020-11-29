import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBb_Npo_sU_FKFrmPunvFafrN4EErcaoU",
  authDomain: "robinhood-ad837.firebaseapp.com",
  databaseURL: "https://robinhood-ad837.firebaseio.com",
  projectId: "robinhood-ad837",
  storageBucket: "robinhood-ad837.appspot.com",
  messagingSenderId: "888827468573",
  appId: "1:888827468573:web:759d3b94d6e50262a05ff4",
  measurementId: "G-G98LD504Y0",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
