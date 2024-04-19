import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyDIfhL2U8KrnpT0aXprGAY24kc5j3CQcEw',
  authDomain: 'sportsmatch-auth.firebaseapp.com',
  projectId: 'sportsmatch-auth',
  storageBucket: 'sportsmatch-auth.appspot.com',
  messagingSenderId: '981049209549',
  appId: '1:981049209549:web:bc67f4bc9f26de001eaf84'
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
//Android: 981049209549-t4haotgorjpg38l5mbml8bebnnrpcotk.apps.googleusercontent.com
//IOS: 981049209549-nvp257t5bs9kr6dmi2hmmi7giogt5r95.apps.googleusercontent.com
