<template>
  <div>
    <div v-if="!user">
      <form action>
        <div>
          <template v-if="error">
            <div class="welcome b">
              <div class="line line1">{{error}}</div>
            </div>
          </template>
          <template v-else>
            <div class="welcome">
              <div class="line line1">Login</div>
              <div class="line line3">
                <span v-if="!email" class="blink">_</span>
              </div>
            </div>
          </template>
        </div>

        <label for>
          Email:
          <input v-model="email" type="text">
        </label>
        <label for>
          Password:
          <input v-model="password" type="password">
        </label>
        <button @click.prevent="login">[ login ]</button>
      </form>
    </div>
    <div v-else>Welcome</div>
  </div>

  <!-- <div>
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
  </div>-->
</template>

<script>
import busyOverlay from '~/components/busy-overlay'
import firebase from 'firebase'
export default {
  middleware: ['auth'],
  components: { busyOverlay },
  layout: 'loginlay',
  data() {
    return {
      email: '',
      password: '',
      user: '',
      error: null,
      username: ''
    }
  },
  computed: {
    strategies: () => [{ key: 'google', name: 'Google', color: '#4284f4' }],
    redirect() {
      return (
        this.$route.query.redirect &&
        decodeURIComponent(this.$route.query.redirect)
      )
    },
    isCallback() {
      return Boolean(this.$route.query.callback)
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
      this.error = null
      return this.$auth.loginWith('google').catch(e => {
        this.error = e + ''
      })

      //   const email = this.email
      //   const password = this.password
      //   const cred = firebase.auth()
      //   const self = this
      //   cred
      //     .setPersistence(firebase.auth.Auth.Persistence.SESSION)
      //     .then(function() {
      //       return cred.signInWithEmailAndPassword(email, password)
      //     })
      //     .catch(function(error) {
      //       // TODO: error handling
      //       console.error(error)
      //       self.error = error.message
      //     })
    }
  }
}
</script>
<style scoped>
.b {
  margin-bottom: 35px;
  line-height: 20px;
}
.blink {
  position: relative;
  top: 60px;
  left: 7px;
}
</style>
