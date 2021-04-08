import * as Firebase from 'firebase';

const firebaseConfig = {
	apiKey: "AIzaSyBUiwDy2SgWIVC0fO7RqPoxZvacjH_6BI0",
    authDomain: "parkzr-720e2.firebaseapp.com",
    databaseURL: "https://parkzr-720e2.firebaseio.com",
    projectId: "parkzr-720e2",
    storageBucket: "parkzr-720e2.appspot.com",
    messagingSenderId: "886354499503"
};

export const app = Firebase.initializeApp(firebaseConfig);
