import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// ✅ Only import getAuth, no analytics here

const firebaseConfig = {
    apiKey: "AIzaSyCo9d_9KEQP16nPpocoeqUrlpzOMki0t-8",
    authDomain: "todo-a1801.firebaseapp.com",
    projectId: "todo-a1801",
    storageBucket: "todo-a1801.firebasestorage.app",
    messagingSenderId: "995533568209",
    appId: "1:995533568209:web:32ff9b76881d6bd3c72df0",
    measurementId: "G-DZQ25CNH8N"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

// ❗ No getAnalytics(app) here ❗
