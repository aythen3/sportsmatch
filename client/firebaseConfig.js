// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBfYnIK4UMRHRuvUYY8RJnU-Rfaw9C3o5w',
  authDomain: 'sportsmatch-a488d.firebaseapp.com',
  projectId: 'sportsmatch-a488d',
  storageBucket: 'sportsmatch-a488d.appspot.com',
  messagingSenderId: '290667898990',
  appId: '1:290667898990:web:c7c9948019f4bef8c75e7f',
  measurementId: 'G-6XDV15BD8S'
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
