import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyCiP7mDEV7T1uhS5TFgOLR765sscBofjwc",
  authDomain: "midas-def35.firebaseapp.com",
  databaseURL: "https://midas-def35.firebaseio.com",
  projectId: "midas-def35",
  storageBucket: "midas-def35.appspot.com",
  messagingSenderId: "471918701496"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };