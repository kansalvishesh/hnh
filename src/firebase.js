import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDvM7TD0NSL_AiI6aBUX-LLKuMqJMiMSzE",
    authDomain: "hnh-solutions.firebaseapp.com",
    databaseURL: "https://hnh-solutions-default-rtdb.firebaseio.com",
    projectId: "hnh-solutions",
    storageBucket: "hnh-solutions.appspot.com",
    messagingSenderId: "700784228928",
    appId: "1:700784228928:web:9d42f8d10f71eeb680bda5",
    measurementId: "G-E82N28CPL8"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase;