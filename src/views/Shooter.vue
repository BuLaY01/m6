<script setup>
import Cards from "../components/Cards.vue";
import { GamesCategory } from "../api.js";
import { onMounted, ref } from "vue";
let games = ref([])
onMounted(async() => {
  games.value = await GamesCategory('shooter')
})
</script>

<template>
  <section>
    <Cards v-for = "card in games" :key = "card.id" :card = "card"/>
  </section>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
}
</style>
