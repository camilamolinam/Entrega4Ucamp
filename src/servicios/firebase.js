import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyAH-tTGRyi6nKFqLs1RDIwxmlojwbFrA_s",
  authDomain: "ejemplo1firabase.firebaseapp.com",
  projectId: "ejemplo1firabase",
  storageBucket: "ejemplo1firabase.appspot.com",
  messagingSenderId: "113806615265",
  appId: "1:113806615265:web:506049e6bce85f2420cda0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;