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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
