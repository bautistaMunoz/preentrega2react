
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBzAvfHQ0JzSyHD-6pEDmXsL15BHliF9QA",
    authDomain: "ecommerce-react-2e722.firebaseapp.com",
    projectId: "ecommerce-react-2e722",
    storageBucket: "ecommerce-react-2e722.firebasestorage.app",
    messagingSenderId: "712267484275",
    appId: "1:712267484275:web:6acdb2e7dd58abddff6e06"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore()

export default db

