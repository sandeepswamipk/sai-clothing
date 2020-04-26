import firebase from 'firebase/app';
import 'firebase/firestore'; // for database
import 'firebase/auth'; // for authentication

const firebaseConfig = {
    apiKey: "AIzaSyB1E18jnwgeam4knEoSh8IL8qMERJulKY4",
    authDomain: "sai-clothing.firebaseapp.com",
    databaseURL: "https://sai-clothing.firebaseio.com",
    projectId: "sai-clothing",
    storageBucket: "sai-clothing.appspot.com",
    messagingSenderId: "258497849452",
    appId: "1:258497849452:web:4c0a996be7e0f7727a1049",
    measurementId: "G-GSNZL080HM"
};

export const createUserProfileDocument = async function(userAuth, additionalData){
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if(!snapShot.exists){
    const displayName = userAuth.displayName || additionalData;
    const email = userAuth.email;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt, 
        additionalData
      });
    }
    catch(error){
      console.log('error creating user', error.message);
    }
  }

  return userRef;

};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = function() {
  auth.signInWithPopup(provider);
} 


export default firebase;



  