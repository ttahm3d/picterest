import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVhXRhWKssMZTzHofYtvc_kKOI6BgcuYU",
  authDomain: "picterest-tahir.firebaseapp.com",
  projectId: "picterest-tahir",
  storageBucket: "picterest-tahir.appspot.com",
  messagingSenderId: "517706274870",
  appId: "1:517706274870:web:404dac1748f6ec95736097",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectStorage };
