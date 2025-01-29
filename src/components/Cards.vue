<template>
  <div>
    <img :src="card.thumbnail" />
    <h1>{{ card.title }}</h1>
    <p>{{ card.short_description }}</p>
    <nav>
      <p>Жанр: {{ card.genre }}</p>
      <p>Платформа: {{ card.platform }}</p>
      <p>Дата релиза: {{ card.release_date }}</p>
    </nav>
    <a :href="card.freetogame_profile_url" target="_blank">Кнопка</a>
  </div>
</template>

<style scoped>
div {
  background-color: rgb(84, 81, 81);
  width: 100%;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
}

img {
  width: 100%;
  border-radius: 16px;
}

h1 {
  font-size: 50px;
  text-align: center;
}

p {
  font-size: 21px;
}

a {
  text-decoration: none;
  color: black;
  font-size: 21px;
  margin-left: 5px;
  background-color: rgb(72, 70, 70);
  padding: 10px;
  display: block;
  margin: 5px 5px;
  text-align: center;
  margin-top: auto

}

nav {
    margin-top: 15px;
    text-align: center;
}
</style>

<script setup>
defineProps({
  card: Object,
});
</script>
