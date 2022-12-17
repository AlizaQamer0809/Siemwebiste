import firebase from firebase;

var firebaseConfig = {
    apiKey: "AIzaSyCW0jwrdPglpnErCMQDcvMYTuxuyeMMyc8",
    authDomain: "fypwebsite-5384c.firebaseapp.com",
    projectId: "fypwebsite-5384c",
    storageBucket: "fypwebsite-5384c.appspot.com",
    messagingSenderId: "367035583122",
    appId: "1:367035583122:web:b5173475841c214031344b",
    measurementId: "G-Y2JFCCWYBF"
  };
const fire=firebase.initializeApp(firebaseConfig)

export default fire;