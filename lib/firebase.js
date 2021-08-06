import firebase from "firebase";
import 'firebase/auth';
import 'firebase/firestore';
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
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const storage = firebase.storage();
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const increment = firebase.firestore.FieldValue.increment;

/**`
 * Gets a users/{uid} document with username
 * @param  {string} username
 */
export async function getUserWithUsername(username) {
  const usersRef = firestore.collection('users');
  const query = usersRef.where('username', '==', username).limit(1);
  const userDoc = (await query.get()).docs[0];
  return userDoc;
}

/**`
 * Converts a firestore document to JSON
 * @param  {DocumentSnapshot} doc
 */
export function postToJSON(doc) {
  const data = doc.data();
  return {
    ...data,
    // Gotcha! firestore timestamp NOT serializable to JSON. Must convert to milliseconds
    createdAt: data.createdAt.toMillis(),
    updatedAt: data.updatedAt.toMillis(),
  };
}