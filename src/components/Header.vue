<template>
  <header>
    <router-link to="/">Main</router-link>
    <router-link to="/fantasy">Fantasy</router-link>
    <router-link to="/royal">Royal</router-link>
    <router-link to="/rpg">Rpg</router-link>
    <router-link to="/shooter">Shooter</router-link>
    <router-link to="/strategy">Strategy</router-link>
  </header>
</template>

<style scoped>
header {
    background-color: black;
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
}

a {
    color: white;
    font-size: 24px;
    text-decoration: none;
}

.router-link-active {
    color: grey;
}
</style>