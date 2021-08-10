import firebase from 'firebase';

import 'firebase/auth';
import 'firebase/storage';
import 'firebase/database';


var firebaseConfig = {
  apiKey: "AIzaSyAkZMEmwMp67mCN6rw_SUCU1hoCeEKMj_I",
  authDomain: "socio-professional.firebaseapp.com",
  projectId: "socio-professional",
  storageBucket: "socio-professional.appspot.com",
  messagingSenderId: "895322563683",
  appId: "1:895322563683:web:938ff49d77bdfd544dc456",
  measurementId: "G-8HWEZW4CVM"
};

  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;