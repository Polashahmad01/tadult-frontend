import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAUcFY0mqB30zvs87NGIBJl0-JRV8Qlst8",
  authDomain: "tadult-97fff.firebaseapp.com",
  projectId: "tadult-97fff",
  storageBucket: "tadult-97fff.appspot.com",
  messagingSenderId: "414487117944",
  appId: "1:414487117944:web:6bbc934ddd35b4df382d8d"
};

// Initalize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

export default auth;
