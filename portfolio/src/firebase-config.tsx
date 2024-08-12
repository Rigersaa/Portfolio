// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXA1pHxSIDKNcVJS6IhXpoDO6kY9V8aHI",
  authDomain: "rigersa-portfolio.firebaseapp.com",
  projectId: "rigersa-portfolio",
  storageBucket: "rigersa-portfolio.appspot.com",
  messagingSenderId: "750438198525",
  appId: "1:750438198525:web:ddb628fa453782e6ab2294",
  measurementId: "G-J2HFYS2ZRG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);