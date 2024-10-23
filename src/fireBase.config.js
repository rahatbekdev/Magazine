import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCTgDjHvPMu0-9OA_HwbmwaDcz5AHZnAXM",
  authDomain: "maltimort.firebaseapp.com",
  databaseURL: "https://maltimort-default-rtdb.firebaseio.com",
  projectId: "maltimort",
  storageBucket: "maltimort.appspot.com",
  messagingSenderId: "747931015424",
  appId: "1:747931015424:web:447eab42916f3f2ed57be5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
