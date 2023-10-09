
const firebase=require('firebase')

const firebaseConfig = {
  apiKey: "AIzaSyCs0H4hgn7dW6OHxHsN4QDurh5dZl8IL5M",
  authDomain: "querydatabase-1f3d5.firebaseapp.com",
  projectId: "querydatabase-1f3d5",
  storageBucket: "querydatabase-1f3d5.appspot.com",
  messagingSenderId: "519928402354",
  appId: "1:519928402354:web:998699825cb4e9396394ab"
};

firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const User=db.collection("Users")
module.exports=User;
