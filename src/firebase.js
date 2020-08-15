import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBDKKsum1l-JQsHM7wICLGZWn7sq-Wkwew",
    authDomain: "twitter-clone-984db.firebaseapp.com",
    databaseURL: "https://twitter-clone-984db.firebaseio.com",
    projectId: "twitter-clone-984db",
    storageBucket: "twitter-clone-984db.appspot.com",
    messagingSenderId: "353482738501",
    appId: "1:353482738501:web:6477cb076df11d4c0a0c2c",
    measurementId: "G-WBPEL9ET41"
};

const firebaseApp = firebase.initializeApp(firebaseConfig) 

const db = firebaseApp.firestore()

export default db;