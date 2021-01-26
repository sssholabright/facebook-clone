import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0qMmmzOP22asWM7-sRequJ_kAiIy7fl0",
  authDomain: "facebook-clone-91239.firebaseapp.com",
  databaseURL: "https://facebook-clone-91239.firebaseio.com",
  projectId: "facebook-clone-91239",
  storageBucket: "facebook-clone-91239.appspot.com",
  messagingSenderId: "2535762451",
  appId: "1:2535762451:web:c73d22f6922ab1b447ade6",
  measurementId: "G-RY2M67YJZR"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider }
  export default db;