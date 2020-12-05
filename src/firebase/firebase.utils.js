import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyAaK7dCkMkqFojKZBXNhc3PwsbtoZ_SJz4',
	authDomain: 'e-commerce-86f9a.firebaseapp.com',
	databaseURL: 'https://e-commerce-86f9a.firebaseio.com',
	projectId: 'e-commerce-86f9a',
	storageBucket: 'e-commerce-86f9a.appspot.com',
	messagingSenderId: '881167220559',
	appId: '1:881167220559:web:661f866a0bba920c200f3a',
	measurementId: 'G-W7JKVE9CPC',
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
