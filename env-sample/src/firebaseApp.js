import firebase from 'firebase';
const { dev: firebaseWebConfig } = require("../firebase-web-config.json");
export const firebaseApp = firebase.initializeApp(firebaseWebConfig);