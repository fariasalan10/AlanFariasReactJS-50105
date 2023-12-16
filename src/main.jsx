import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRkLnfHiBaliqBth0aIO3Ezrw-9NJdhVE",
  authDomain: "alanfarias-50105-reactjs.firebaseapp.com",
  projectId: "alanfarias-50105-reactjs",
  storageBucket: "alanfarias-50105-reactjs.appspot.com",
  messagingSenderId: "135379974175",
  appId: "1:135379974175:web:0f3c8da19b420eba923d2a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
