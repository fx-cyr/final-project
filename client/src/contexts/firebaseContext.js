import React, { createContext, useEffect, useState } from "react";
import withFirebaseAuth from "react-with-firebase-auth";
import firebase from "firebase";
import "firebase/auth";

export const FirebaseContext = createContext({ signInWithGoogle: () => {} });

var firebaseConfig = {
  apiKey: "AIzaSyDdnyj6JrUEfoAtbGJ12z-QSvN5OKTpHO4",
  authDomain: "savester-app.firebaseapp.com",
  projectId: "savester-app",
  storageBucket: "savester-app.appspot.com",
  messagingSenderId: "488207537979",
  appId: "1:488207537979:web:85c680c20ab5a04d0a891e",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const firebaseAppAuth = firebaseApp.auth();
const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

const FirebaseProvider = ({ children, signInWithGoogle, user }) => {
  const [appUser, setAppUser] = useState({});
  useEffect(() => {
    if (user) {
      console.log(user);
      //   setAppUser({
      //     displayName: user.displayName,
      //     email: user.email,
      //   });
    }
  }, [user]);
  return (
    <FirebaseContext.Provider value={{ signInWithGoogle }}>
      {children}
    </FirebaseContext.Provider>
  );
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
})(FirebaseProvider);
