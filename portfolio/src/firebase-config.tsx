// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbCLhR5mZRT1mpwFBRUHunOtE4q84cHiM",
  authDomain: "portfolio-rigersa.firebaseapp.com",
  projectId: "portfolio-rigersa",
  storageBucket: "portfolio-rigersa.appspot.com",
  messagingSenderId: "817076993621",
  appId: "1:817076993621:web:b8145b14ef9cd9eddd1edc",
  measurementId: "G-KSEMMCC4ZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);