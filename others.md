// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
apiKey: "AIzaSyCMc_3ec3nwWQiq3E0yw3wahapxjt6XxqM",
authDomain: "messenger-61e4c.firebaseapp.com",
projectId: "messenger-61e4c",
storageBucket: "messenger-61e4c.appspot.com",
messagingSenderId: "786076396083",
appId: "1:786076396083:web:c2c61f50285545f1f65146",
measurementId: "G-MFK1H0GNS7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
