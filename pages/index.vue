<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"></div>
      <v-card>
        <v-text-field v-model="email" label="username"></v-text-field>
        <v-text-field v-model="password" label="password"></v-text-field>
        <template v-if="user">
          <v-card-title class="headline">Welcome to the Vuetify + Nuxt.js template</v-card-title>
          <h2>{{user}}</h2>
        </template>
        <template v-if="error">
          <div>{{error}}</div>
        </template>
        <div>
          <div>
            <v-btn @click="login">login</v-btn>
            <v-btn @click="logout">logout</v-btn>
          </div>
        </div>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      email: '',
      password: '',
      user: '',
      error: ''
    }
  },

  methods: {
    async logout() {
      const fb = firebase.auth()
      try {
        await fb.signOut()
      } catch (e) {
        console.log(e)
        this.error = e
      }
      this.user = fb.currentUser
      console.log(fb.currentUser)
      this.error = null
    },
    async login() {
      const email = this.email
      const password = this.password
      const cred = firebase.auth()
      try {
        await cred.signInWithEmailAndPassword(email, password)
      } catch (e) {
        // TODO: error handling
        console.error(e)
        this.error = e.message
      }
      this.user = cred.currentUser.email
      this.error = null
    }
  }
}
</script>
