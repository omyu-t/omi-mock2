import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCZs7HKBiVuEQJzZCsTf--hL7_2pM4Xh5k",
  authDomain: "omi-mock2.firebaseapp.com",
  databaseURL: "https://omi-mock2.firebaseio.com",
  projectId: "omi-mock2",
  storageBucket: "omi-mock2.appspot.com",
  messagingSenderId: "267906004896",
  appId: "1:267906004896:web:f1459cdb02660f1a5d96c5"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;