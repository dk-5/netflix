import { initializeApp } from 'firebase/app';

import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "",
    authDomain: "netflix-clone-13436.firebaseapp.com",
    projectId: "netflix-clone-13436",
    storageBucket: "netflix-clone-13436.appspot.com",
    messagingSenderId: "212580445323",
    appId: "1:212580445323:web:0302f31ff9d7e3cc42b88e",
    measurementId: "G-6H67CV5ETD"
  };
  const app=initializeApp(firebaseConfig)

  export const auth = getAuth(app);



