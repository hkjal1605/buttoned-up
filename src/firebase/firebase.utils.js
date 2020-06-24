import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBqY0LBZGckZGcjUFBPxZ8nsMWk9QTYNhI",
    authDomain: "buttoned-up-db.firebaseapp.com",
    databaseURL: "https://buttoned-up-db.firebaseio.com",
    projectId: "buttoned-up-db",
    storageBucket: "buttoned-up-db.appspot.com",
    messagingSenderId: "879541062781",
    appId: "1:879541062781:web:88b04bfb5fcc86e57cb514",
    measurementId: "G-CPJEH4KKPQ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

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
                ...additionalData

            })
        } catch(error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;