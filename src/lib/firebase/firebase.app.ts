import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyC9MGgntN2Iy2FEgxJDCIxGNwIxOwF_6Ss",
    authDomain: "jungk-dev.firebaseapp.com",
    projectId: "jungk-dev",
    storageBucket: "jungk-dev.appspot.com",
    messagingSenderId: "713047585852",
    appId: "1:713047585852:web:12801318d4d3d8f2df7f39",
    measurementId: "G-9WX2H4NSXD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const messaging = getMessaging(app)
const token = await getToken(messaging, { vapidKey: "BMQUQL7iwr-YTVDyszxEigsCIYkEvy7fBcpQ43MQGkv1gPScH_v45DTd-rkWwt2M6Duc6troKFPk196TVBM56wM" })
console.log(token)
// export the firebase app
export { messaging };

