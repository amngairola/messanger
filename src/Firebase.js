import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCMc_3ec3nwWQiq3E0yw3wahapxjt6XxqM",
  authDomain: "messenger-61e4c.firebaseapp.com",
  projectId: "messenger-61e4c",
  storageBucket: "messenger-61e4c.appspot.com",
  messagingSenderId: "786076396083",
  appId: "1:786076396083:web:c2c61f50285545f1f65146",
  measurementId: "G-MFK1H0GNS7",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const gitProvider = new GithubAuthProvider();
const googleProvider = new GoogleAuthProvider();

export { auth, gitProvider, googleProvider };
