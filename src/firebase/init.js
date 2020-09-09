import * as firebase from "firebase/app";


import "firebase/database";

var firebaseConfig = {
    apiKey: "AIzaSyB65G_oLsUAzzeDFsh8_kfqWKZiYo5nvko",
    authDomain: "vuex-practice.firebaseapp.com",
    databaseURL: "https://vuex-practice.firebaseio.com",
    projectId: "vuex-practice",
    storageBucket: "vuex-practice.appspot.com",
    messagingSenderId: "618917836091",
    appId: "1:618917836091:web:4debe4c13e5d3e5143f31e",
    measurementId: "G-NHF32J28B9"
};

let firebaseApp = firebase.initializeApp(firebaseConfig)

let firebaseDB = firebaseApp.database()

export { firebaseDB }