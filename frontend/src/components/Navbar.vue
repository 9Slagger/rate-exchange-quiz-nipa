<template>
  <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
      </div>

      <div class="ml-3">
        <router-link to="/">
          <span class="nav-link"><b>Home</b></span>
        </router-link>
      </div>

      <div class="ml-3">
        <router-link to="/currencies">
          <span class="nav-link"><b>Currencie</b></span>
        </router-link>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/9Slagger/rate-exchange-quiz-nipa"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style scoped>
.nav-link {
  color: white;
  font-size: 30px;
}
a {
  text-decoration: none;
}
a :hover {
  box-shadow: 0 4px ;
}
</style>