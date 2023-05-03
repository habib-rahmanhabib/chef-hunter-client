// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2lQ6RuA5wwu8SlOMdImAknFt3H27eY10",
  authDomain: "foodbuz-chef.firebaseapp.com",
  projectId: "foodbuz-chef",
  storageBucket: "foodbuz-chef.appspot.com",
  messagingSenderId: "467476503331",
  appId: "1:467476503331:web:ab7e5aad0886d1dffbca96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;