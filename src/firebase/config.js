import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCRWSPzVERjm7xhAkPvd2EqZfkkAed5Ez8",
    authDomain: "pharmacy-d6cfd.firebaseapp.com",
    projectId: "pharmacy-d6cfd",
    storageBucket: "pharmacy-d6cfd.appspot.com",
    messagingSenderId: "96037787499",
    appId: "1:96037787499:web:f34b347e8eb368bb2b5e2e"
};
// export const firebaseConfig ={   
//     apiKey: "AIzaSyC6Jtyc5tKoBLKhTNHC0_GmS3sGUOCxcr4",
//     authDomain: "balsam-pharmacy.firebaseapp.com",
//     projectId: "balsam-pharmacy",
//     storageBucket: "balsam-pharmacy.appspot.com",
//     messagingSenderId: "166489810313",
//     appId: "1:166489810313:web:e938c7b398e89f9c63ed58"
//   };

// var firebaseConfig = {
//     apiKey: "AIzaSyDBCgt_WbezQY5qvslSxQNtm6mMJkPFXP4",
//     authDomain: "balsam-fe1a9.firebaseapp.com",
//     projectId: "balsam-fe1a9",
//     storageBucket: "balsam-fe1a9.appspot.com",
//     messagingSenderId: "1049642399297",
//     appId: "1:1049642399297:web:78d5aa019df48d2052b8c0",
//     measurementId: "G-BSDN08S0Z7"
//   };

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider)

export const handleUserProfile = async (userAuth , additionalData) => {
    const { uid } = userAuth
    const userRef = firestore.doc(`users/${uid}`)
    const snapshot = await userRef.get()
    if(!snapshot.exists){
        const { displayName, email} = userAuth
        const date = new Date()
        const userRoles = (email === ('alaamohamed123789@gmail.com' || 'showkmahmoud@gmail.com'))? ['user', 'admin'] : ['user']
        userRef.set({
            displayName,
            email,
            createdDate: date,
            userRoles,
            ...additionalData
        })
    }
    return userRef
}



