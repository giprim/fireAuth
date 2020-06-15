import * as firebase from 'firebase/app';
import 'firebase/auth';

firebase.initializeApp({
	apiKey: 'AIzaSyBP28dbMIUWDXdrn0dR94xOF_E9Ih0Bvlk',
	authDomain: 'fireauth-e58eb.firebaseapp.com',
	databaseURL: 'https://fireauth-e58eb.firebaseio.com',
	projectId: 'fireauth-e58eb',
	storageBucket: 'fireauth-e58eb.appspot.com',
	messagingSenderId: '325794550944',
	appId: '1:325794550944:web:db38386c64cd68524aa5c5',
});

// console.log(firebaseApp);

export default firebase;

// apiKey: process.env.REACT_APP_FIREBASE_KEY,
// authDomain: process.env.REACT_APP_FIREBASE_DOMAIN,
// databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
// projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
// storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
// messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
// appId: process.env.REACT_APP_FIREBASE_APP_ID,
