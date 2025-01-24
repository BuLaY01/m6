<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/Header.vue'

</script>

<template>
<main>
  <Header/>
  <RouterView/>
</main>
</template>

<style>
* {
  padding: 0;
  margin: 0;
}

body {
  background-color: grey;
}
</style>
