

import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB4kVDI4Ruiop3chx-G93SDRLTXui04tSk",
  authDomain: "food-service-app-69e99.firebaseapp.com",
  projectId: "food-service-app-69e99",
  storageBucket: "food-service-app-69e99.firebasestorage.app",
  messagingSenderId: "62066636985",
  appId: "1:62066636985:web:305902caf0358aef0a8368",

};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
