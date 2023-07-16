// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.API_KEY}`,
  authDomain: "aperture-32.firebaseapp.com",
  projectId: "aperture-32",
  storageBucket: "aperture-32.appspot.com",
  messagingSenderId: "41642119387",
  appId: "1:41642119387:web:a694cc1c1e509bbacebcfe"
};

// Initialize Firebase
initializeApp(firebaseConfig);