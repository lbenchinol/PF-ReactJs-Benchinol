import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import './index.css'



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXzwAqo9G8mnFpYfObFJ7nb-dc6Y5ysAc",
  authDomain: "termo-store.firebaseapp.com",
  projectId: "termo-store",
  storageBucket: "termo-store.appspot.com",
  messagingSenderId: "213089561757",
  appId: "1:213089561757:web:55910124dd0a68d01bf874"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);



ReactDOM.createRoot(document.getElementById('root')).render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
)
