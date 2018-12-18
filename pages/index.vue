<template>
  <div>
    {{inb}}
    <div>
      <v-btn color="success" @click="lout">logout</v-btn>
    </div>
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
export default {
  layout: 'default',
  data() {
    return {}
  },
  computed: {
    inb() {
      return this.$auth.$state
    }
  },
  methods: {
    async lout() {
      await this.$auth.logout()
    }
  }
}
</script>
<style scoped>
</style>
