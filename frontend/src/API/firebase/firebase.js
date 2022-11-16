import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
        apiKey: "AIzaSyCBOElRPSCKm4p6lxabRlbM4tUTE_-MddE",
        authDomain: "unsplash-91af9.firebaseapp.com",
        projectId: "unsplash-91af9",
        storageBucket: "unsplash-91af9.appspot.com",
        messagingSenderId: "214988616762",
        appId: "1:214988616762:web:a3401c28bd27183871f103"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const googleLogin = new firebase.auth.GoogleAuthProvider();

export { auth, googleLogin }