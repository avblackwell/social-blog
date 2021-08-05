import firebase from "firebase";
import 'firebase/auth';
import 'firesbase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyBvipKbj7CQcblJgRNZCGaAVQfCQvs4W04",
    authDomain: "social-blog-e8421.firebaseapp.com",
    projectId: "social-blog-e8421",
    storageBucket: "social-blog-e8421.appspot.com",
    messagingSenderId: "935702027354",
    appId: "1:935702027354:web:2ea9d8bd5c2a4abdc64c63",
    measurementId: "G-FWGYDQ582T"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();