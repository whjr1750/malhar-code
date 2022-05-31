import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAmt4zZIp_vvLuZCslLmkM2r6ILIHHpBKg",
  authDomain: "linklister-4234b.firebaseapp.com",
  databaseURL: "https://linklister-4234b-default-rtdb.firebaseio.com",
  projectId: "linklister-4234b",
  storageBucket: "linklister-4234b.appspot.com",
  messagingSenderId: "659876717373",
  appId: "1:659876717373:web:752d446e46c99f15ea5b54"
};
firebase.initializeApp(firebaseConfig)



  
export default firebase.database()