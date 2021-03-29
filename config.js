import firebase from 'firebase';
require('@firebase/firestore')

  var firebaseConfig = {
    apiKey: "AIzaSyBo9Bi0__pgtDA9NcGVGa_LEBH0l2egcag",
    authDomain: "barter-app-2017b.firebaseapp.com",
    projectId: "barter-app-2017b",
    storageBucket: "barter-app-2017b.appspot.com",
    messagingSenderId: "43844335708",
    appId: "1:43844335708:web:f54049a7c7bb19c7050e99"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore();
