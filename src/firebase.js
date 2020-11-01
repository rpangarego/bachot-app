import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDC5NociaSvFKksUMUGzM4oA7LQWuP2_9w",
  authDomain: "bachot-app.firebaseapp.com",
  databaseURL: "https://bachot-app.firebaseio.com",
  projectId: "bachot-app",
  storageBucket: "bachot-app.appspot.com",
  messagingSenderId: "719789297146",
  appId: "1:719789297146:web:6a770dcde2b63c114de843",
  measurementId: "G-FY1Y30KG5D"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
