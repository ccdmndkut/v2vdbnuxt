<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"></div>
      <v-card>
        <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
        <h2>Write to Firestore.</h2>
        <div>
          <v-btn :disabled="writeSuccessful" color="success" @click="writeToFirestore">
            <span v-if="!writeSuccessful">Write now</span>
            <span v-else>Successful!</span>
          </v-btn>
        </div>
        <div>
          <h2>Read from Firestore.</h2>
          <div>
            <v-btn :disabled="readSuccessful" @click="readFromFirestore">
              <span v-if="!readSuccessful">Read now</span>
              <span v-else>Successful!</span>
            </v-btn>
            <v-btn @click="login">login</v-btn>
            <p>{{text}}</p>
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
import { fireDb } from '~/plugins/firebase.js'
export default {
  data() {
    return {
      writeSuccessful: false,
      readSuccessful: false,
      text: ''
    }
  },
  async asyncData(
    { app, params, error } // eslint-disable-line no-unused-vars
  ) {
    const ref = fireDb.collection('test').doc('test')
    let snap
    try {
      snap = await ref.get()
    } catch (e) {
      // TODO: error handling
      console.error(e)
    }
    return {
      text: snap.data().text
    }
  },
  methods: {
    async login() {
      const email = 'chriscombs@vaclaims.net'
      const password = 'cc3043'
      const cred = firebase.auth()
      try {
        await cred.signInWithEmailAndPassword(email, password)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      console.log(firebase.auth().currentUser)
    },
    async writeToFirestore() {
      const ref = fireDb.collection('test').doc('test3')
      const document = {
        text: 'This is a test message 3.'
      }
      try {
        await ref.set(document)
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.writeSuccessful = true
    },
    async readFromFirestore() {
      const ref = fireDb.collection('test').doc('test3')
      let snap
      try {
        snap = await ref.get()
      } catch (e) {
        // TODO: error handling
        console.error(e)
      }
      this.text = snap.data().text
      this.readSuccessful = true
    }
  }
}
</script>
