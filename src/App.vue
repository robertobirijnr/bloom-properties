<template>
  <div id="app">
   <navbar/>
   <hero/>
    <router-view/>
  </div>

</template>

<script>
import Hero from './components/Hero.vue'
import Navbar from './components/Navbar.vue'
export default {
  components: { Navbar, Hero },
  
}
</script>

<style>

</style>
