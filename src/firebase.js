import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANZLNRltjQKYaV_D33nCo5JF3gHlj4TPg",
  authDomain: "miniproject-e7086.firebaseapp.com",
  projectId: "miniproject-e7086",
  storageBucket: "miniproject-e7086.appspot.com",
  messagingSenderId: "618694632752",
  appId: "1:618694632752:web:19274926432903db63d4f5",
  measurementId: "G-DRXQ8MJQ8V"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
