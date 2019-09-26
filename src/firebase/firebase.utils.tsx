import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAgH4LxyxwL_l64mUuYpEEdU-vXs-GM6dk',
  authDomain: 'crwn-db-e8b62.firebaseapp.com',
  databaseURL: 'https://crwn-db-e8b62.firebaseio.com',
  projectId: 'crwn-db-e8b62',
  storageBucket: '',
  messagingSenderId: '41391278176',
  appId: '1:41391278176:web:6e3c11b7d59f115ce31b05',
};

export const createUserProfile = async (
  userAuth: firebase.User,
  additionalData?: object,
): Promise<firebase.firestore.DocumentReference | void> => {
  if (!userAuth) {
    return;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
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
