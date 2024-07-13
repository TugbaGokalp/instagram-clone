import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAlNjLp4WLxT0GDJ8B_rJS4tHF55Rz7Nm0",
  authDomain: "insta-clone-yt-58575.firebaseapp.com",
  projectId: "insta-clone-yt-58575",
  storageBucket: "insta-clone-yt-58575.appspot.com",
  messagingSenderId: "369347178386",
  appId: "1:369347178386:web:9756559165b423d8f01b4b",
  measurementId: "G-G6Z2GPDEG2",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, auth, firestore, storage };
