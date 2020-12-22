<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="@/assets/logo.png"> -->
    <LandingPage />
  </div>
</template>

<script>
import LandingPage from '@/Pages/LandingPage/index.vue'

export default {
  name: 'App',
  components: {
    LandingPage
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
