// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBh932bR2i8ikEBVSrPmK1fosLbsbacKQs",
  authDomain: "gameshop-79635.firebaseapp.com",
  projectId: "gameshop-79635",
  storageBucket: "gameshop-79635.appspot.com",
  messagingSenderId: "462382257379",
  appId: "1:462382257379:web:91a5ca0166e7440d1b61d6",
  measurementId: "G-WB940E615S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);