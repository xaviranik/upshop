import firebase from "firebase";

let firebaseConfig = {
    apiKey: "AIzaSyDjz-riTbdKA7eVEx2vGRh3msnv_pKqn7M",
    authDomain: "ggupshop.firebaseapp.com",
    databaseURL: "https://ggupshop.firebaseio.com",
    projectId: "ggupshop",
    storageBucket: "ggupshop.appspot.com",
    messagingSenderId: "559777479763",
    appId: "1:559777479763:web:e02c8b4b9435f6d2b09aa6"
};
// Initialize Firebase
export const fb = firebase.initializeApp(firebaseConfig);