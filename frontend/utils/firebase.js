import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAMPAmRvxUEnX4NgAHhQ-nsLiHg7jefrnw",
  authDomain: "travel-blog-c4a4e.firebaseapp.com",
  projectId: "travel-blog-c4a4e",
  storageBucket: "travel-blog-c4a4e.appspot.com",
  messagingSenderId: "845973371316",
  appId: "1:845973371316:web:fbe640062568b47de8dae1",
  measurementId: "G-YGT123V714",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
