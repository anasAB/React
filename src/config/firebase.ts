/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import 'firebase/database';


const config = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY,
  authDomain: import.meta.env.VITE_REACT_APP_AUTH_DOMAIN,
  databaseURL: import.meta.env.VITE_REACT_APP_DATABASE_URL,
  projectId: import.meta.env.VITE_REACT_APP_PROJECT_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_MESSAGING_SENDER_ID,
};



const app = initializeApp(config);

export const db = getFirestore(app)