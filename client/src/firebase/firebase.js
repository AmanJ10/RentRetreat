// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2edSKUncwgFKI0Csy-i_kr-YW-ppXGNw",
  authDomain: "rentretreat-2fba4.firebaseapp.com",
  projectId: "rentretreat-2fba4",
  storageBucket: "gs://rentretreat-2fba4.appspot.com",
  messagingSenderId: "628044125355",
  appId: "1:628044125355:web:d5dce8a7d0fc57503153ee",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage();
export { app, storage };
