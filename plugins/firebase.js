import firebase from 'firebase/app'
import 'firebase/firestore'
if (!firebase.apps.length) {
  const config = {
    apiKey: 'AIzaSyDMbILM1a366tYFM3-nOLwCUXapJ8ETqmw',
    authDomain: 'vaclaims-194006.firebaseapp.com',
    databaseURL: 'https://vaclaims-194006.firebaseio.com',
    projectId: 'vaclaims-194006',
    storageBucket: 'vaclaims-194006.appspot.com',
    messagingSenderId: '524576132881'
  }
  firebase.initializeApp(config)
  firebase.firestore().settings({ timestampsInSnapshots: true })
}
const fireDb = firebase.firestore()
export { fireDb }
