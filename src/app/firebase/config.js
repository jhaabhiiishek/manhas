// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRWJh4xZ4jM-8sJ0yl3fs92kBGD3cmu4M",
  authDomain: "manhas-209a2.firebaseapp.com",
  projectId: "manhas-209a2",
  storageBucket: "manhas-209a2.firebasestorage.app",
  messagingSenderId: "708240054077",
  appId: "1:708240054077:web:cccf7ce903c46b9bef1754",
  measurementId: "G-EXWKPCDP9X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      const analytics = getAnalytics(app);
    }
  });
}


export { db };