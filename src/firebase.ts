import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBZRHy1Pcl0Rruc-mMSJvIqVpPLZH5f2kU",
  authDomain: "abstract-8c7a0.firebaseapp.com",
  projectId: "abstract-8c7a0",
  storageBucket: "abstract-8c7a0.appspot.com",
  messagingSenderId: "370883165481",
  appId: "1:370883165481:web:55c1a59335f403c838cb38",
  measurementId: "G-GQMZTG4ZXD"
};


const app = getApps().length? getApp(): initializeApp(firebaseConfig);
export {app}