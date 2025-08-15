// src/app/utils/firebase.js
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyB2xebai97FQTqgzuQIoOOQYyQsUpndLmo",
  authDomain: "sarkariresult-gov.firebaseapp.com",
  projectId: "sarkariresult-gov",
  storageBucket: "sarkariresult-gov.firebasestorage.app",
  messagingSenderId: "767950036220",
  appId: "1:767950036220:web:09c71ff28d2c00af1d4b79",
  measurementId: "G-0T6X74GEW8"
};

// Initialize Firebase only once
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Run analytics only in the browser
if (typeof window !== "undefined") {
  getAnalytics(app);
}

export { app };
