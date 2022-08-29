import "./App.css";
import NavBar from "./app/common/navbar/navbar";
import Navigation from "./navigation/navigation";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCTelgJo9AYAH5rsZc891rZlMWxF8Nngbs",
  authDomain: "zebrandstechnical.firebaseapp.com",
  projectId: "zebrandstechnical",
  storageBucket: "zebrandstechnical.appspot.com",
  messagingSenderId: "307822307436",
  appId: "1:307822307436:web:1345168b16be0f14149049",
  measurementId: "G-GRKX38EZBG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function App() {
  return (
    <div style={{height: '100%'}}>
      <NavBar></NavBar>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
