// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDJiGX_MGdPJSLJ2Z2aXuTYchhKxUkAeKI",
    authDomain: "eservicesite-geniouscarservice.firebaseapp.com",
    projectId: "eservicesite-geniouscarservice",
    storageBucket: "eservicesite-geniouscarservice.appspot.com",
    messagingSenderId: "236467911221",
    appId: "1:236467911221:web:3f7e15990e9aaea7394f7c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default (auth);