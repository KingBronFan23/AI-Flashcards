// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBtk3X8Q8t23_ABI2RTXeQC3gCK3IVnQME",
  authDomain: "poroject4.firebaseapp.com",
  projectId: "poroject4",
  storageBucket: "poroject4.appspot.com",
  messagingSenderId: "682382849210",
  appId: "1:682382849210:web:2f93fef6575846f72f7e83",
  measurementId: "G-E932E6NDWG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);