import firebase from 'firebase';
const { webAppConf } = require("../firebase-web-config.json");
export const firebaseApp = firebase.initializeApp(webAppConf);