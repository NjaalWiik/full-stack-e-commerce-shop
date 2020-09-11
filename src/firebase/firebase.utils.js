import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyA616gtXXxUNk4YQ04wAG_SA_OHNw4rVRI',
  authDomain: 'ecommerce-minimalistic.firebaseapp.com',
  databaseURL: 'https://ecommerce-minimalistic.firebaseio.com',
  projectId: 'ecommerce-minimalistic',
  storageBucket: 'ecommerce-minimalistic.appspot.com',
  messagingSenderId: '447971544479',
  appId: '1:447971544479:web:1050b7156e075b0c6741aa'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
