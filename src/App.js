import "./App.css";
import NavBar from "./app/common/navbar/navbar";
import Navigation from "./navigation/navigation";
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
function App() {
  return (
    <div style={{ height: "100%" }}>
      <NavBar></NavBar>
      <Navigation></Navigation>
    </div>
  );
}

export default App;
