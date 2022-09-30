import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDxOYgB8xFdCfoOUM0kkFyRvTZyNPCfWpo",
    authDomain: "linkedin-clone-react-bc560.firebaseapp.com",
    projectId: "linkedin-clone-react-bc560",
    storageBucket: "linkedin-clone-react-bc560.appspot.com",
    messagingSenderId: "930009702066",
    appId: "1:930009702066:web:05de947fbe1e4a5d9ff3ab"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();


 export { db,auth };