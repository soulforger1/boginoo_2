import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDgzK28EfahYUiaj9RSzAn9c92x-FwoQdw",
    authDomain: "boginoo-2.firebaseapp.com",
    databaseURL: "https://boginoo-2.firebaseio.com",
    projectId: "boginoo-2",
    storageBucket: "boginoo-2.appspot.com",
    messagingSenderId: "899945451598",
    appId: "1:899945451598:web:cccddd6bfb7fd28d23331f",
    measurementId: "G-KE1VZF0K8N"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();