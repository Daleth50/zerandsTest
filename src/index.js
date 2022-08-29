import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { initializeApp } from "firebase/app";
// Your web app's Firebase configuration
// Initialize Firebase
initializeApp({
  apiKey: "AIzaSyCTelgJo9AYAH5rsZc891rZlMWxF8Nngbs",
  authDomain: "zebrandstechnical.firebaseapp.com",
  projectId: "zebrandstechnical",
  storageBucket: "zebrandstechnical.appspot.com",
  messagingSenderId: "307822307436",
  appId: "1:307822307436:web:1345168b16be0f14149049",
  measurementId: "G-GRKX38EZBG",
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
