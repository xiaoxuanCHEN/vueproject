<template>
  <div>
    <home-header></home-header>
    <router-link to="/test">Test</router-link>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>

<style>
</style>
