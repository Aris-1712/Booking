import firebase from 'firebase'
  var firebaseConfig = {
    apiKey: "AIzaSyB2n-rFbXzSzAIy9ndMiHQ4v4InhhQPA4M",
    authDomain: "bookingapp-4dd40.firebaseapp.com",
    databaseURL: "https://bookingapp-4dd40.firebaseio.com",
    projectId: "bookingapp-4dd40",
    storageBucket: "bookingapp-4dd40.appspot.com",
    messagingSenderId: "103269288216",
    appId: "1:103269288216:web:cc36708e1460a7d2d5b66d"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  const storage=firebase.storage()
  export default storage
