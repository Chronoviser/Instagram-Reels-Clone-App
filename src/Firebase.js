import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDhB7V03J3iIva91HhLLI90_Yoi7HLNEDw",
    authDomain: "react-web-apps-ac67c.firebaseapp.com",
    projectId: "react-web-apps-ac67c",
    storageBucket: "react-web-apps-ac67c.appspot.com",
    messagingSenderId: "960509337092",
    appId: "1:960509337092:web:c3c3fa89d4de7aabfcdf51",
    measurementId: "G-49XBJKQZJS"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore(); 

export default db;